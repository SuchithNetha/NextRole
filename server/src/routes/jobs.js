const express = require('express');
const router = express.Router();
const axios = require('axios');
const { skillHierarchy } = require('../data/skillHierarchy');

// Firecrawl API configuration
const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;
const FIRECRAWL_API_URL = 'https://api.firecrawl.io/v1/jobs/search';

router.post('/recommendations', async (req, res) => {
  try {
    const { skills, role } = req.body;

    // Get relevant job titles based on the role
    const category = Object.entries(skillHierarchy).find(([_, data]) => 
      data.roles.includes(role)
    );

    // Prepare search query for Firecrawl
    const searchQuery = {
      query: role || '',
      skills: skills,
      location: 'remote', // Default to remote jobs
      limit: 10,
    };

    // Call Firecrawl API
    const response = await axios.post(FIRECRAWL_API_URL, searchQuery, {
      headers: {
        'Authorization': `Bearer ${FIRECRAWL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Process and format the response
    const recommendations = response.data.jobs.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary || 'Not specified',
      matchPercentage: calculateMatchPercentage(job.skills || [], skills),
      skills: job.skills || [],
      missingSkills: job.skills ? job.skills.filter(skill => !skills.includes(skill)) : [],
      url: job.url,
      postedDate: new Date(job.posted_at).toLocaleDateString(),
    }));

    // Sort by match percentage
    recommendations.sort((a, b) => b.matchPercentage - a.matchPercentage);

    res.json({ recommendations });
  } catch (error) {
    console.error('Error fetching job recommendations:', error);
    res.status(500).json({ error: 'Failed to fetch job recommendations' });
  }
});

// Helper function to calculate match percentage
function calculateMatchPercentage(jobSkills, userSkills) {
  const matchingSkills = jobSkills.filter(skill => 
    userSkills.some(userSkill => 
      userSkill.toLowerCase().includes(skill.toLowerCase()) ||
      skill.toLowerCase().includes(userSkill.toLowerCase())
    )
  );

  return Math.round((matchingSkills.length / jobSkills.length) * 100);
}

module.exports = router; 