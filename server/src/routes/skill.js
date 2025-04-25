const express = require('express');
const router = express.Router();
const { findBestMatches } = require('../utils/skillMatcher');
const { analyzeSkills } = require('../utils/skillAnalyzer');
const { skillHierarchy } = require('../data/skillHierarchy');
const jobRoles = require('../data/jobRoles');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');

// Test MongoDB Connection
router.get('/test-db', async (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState;
    const status = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };
    res.json({ 
      status: status[dbStatus],
      database: mongoose.connection.name,
      host: mongoose.connection.host
    });
  } catch (error) {
    console.error('Database test error:', error);
    res.status(500).json({ error: 'Database connection test failed', details: error.message });
  }
});

// Get all available skills
router.get('/available', auth, async (req, res) => {
  try {
    const skills = new Set();
    jobRoles.forEach(role => {
      role.requiredSkills.forEach(skill => skills.add(skill));
      role.optionalSkills.forEach(skill => skills.add(skill));
    });
    res.json(Array.from(skills));
  } catch (error) {
    console.error('Error fetching available skills:', error);
    res.status(500).json({ error: 'Failed to fetch available skills' });
  }
});

// Get high-value skills
router.get('/high-value', auth, (req, res) => {
  try {
    const highValueSkills = jobRoles.map(role => ({
      name: role.title,
      skills: [...role.requiredSkills, ...role.optionalSkills],
      demand: "High",
      growth: "+15%"
    }));
    res.json(highValueSkills);
  } catch (error) {
    console.error('Error fetching high-value skills:', error);
    res.status(500).json({ error: 'Failed to fetch high-value skills' });
  }
});

// Get job matches based on skills
router.post('/job-matches', auth, async (req, res) => {
  try {
    // Verify user is authenticated
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { skills } = req.body;
    console.log('Received request from user:', req.user._id);
    console.log('Received request body:', req.body);
    console.log('Received skills:', skills);

    if (!skills || !Array.isArray(skills)) {
      console.log('Invalid skills format:', skills);
      return res.status(400).json({ 
        error: 'Skills must be provided as an array',
        received: skills
      });
    }

    // Clean up skills array
    const cleanedSkills = skills
      .filter(skill => typeof skill === 'string' && skill.trim())
      .map(skill => skill.trim());

    console.log('Cleaned skills:', cleanedSkills);

    if (cleanedSkills.length === 0) {
      return res.status(400).json({ 
        error: 'At least one valid skill is required',
        received: skills,
        cleaned: cleanedSkills
      });
    }

    // Find matching jobs
    const matches = findBestMatches(cleanedSkills);
    console.log(`Found ${matches.length} matches`);

    // Analyze skills for recommendations
    const analysis = analyzeSkills(cleanedSkills);
    console.log('Analysis complete');

    // Format the response
    const response = {
      matches: matches.map(match => ({
        id: Math.random().toString(36).substr(2, 9),
        title: match.title,
        company: 'Various Companies',
        location: 'Multiple Locations',
        salary: 'Competitive',
        matchPercentage: Math.round(match.matchPercentage),
        skills: match.matchingSkills,
        missingSkills: match.missingSkills,
        category: match.category
      })),
      analysis: {
        domains: analysis.domains,
        combinations: analysis.combinations,
        recommendations: analysis.recommendations,
        roadmaps: skillHierarchy
      }
    };

    console.log(`Sending response with ${response.matches.length} matches`);
    res.json(response);
  } catch (error) {
    console.error('Error in job-matches route:', error);
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: 'Authentication failed',
        details: 'Invalid or expired token'
      });
    }
    res.status(500).json({ 
      error: 'Failed to process skill matching request',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Get all roadmaps
router.get('/roadmaps', auth, (req, res) => {
  try {
    res.json({ skillHierarchy });
  } catch (error) {
    console.error('Error fetching roadmaps:', error);
    res.status(500).json({ error: 'Failed to fetch roadmaps' });
  }
});

module.exports = router; 