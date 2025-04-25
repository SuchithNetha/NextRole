const { skillHierarchy } = require('../data/skillHierarchy');

function normalizeSkill(skill) {
  return skill.toLowerCase().trim()
    .replace(/\.js$/, '')  // Remove .js from the end
    .replace(/[-_\s]+/g, ' '); // Replace hyphens, underscores, and multiple spaces with a single space
}

function calculateMatchPercentage(userSkills, jobSkills) {
  if (!jobSkills || jobSkills.length === 0) return 0;
  if (!userSkills || userSkills.length === 0) return 0;
  
  const normalizedUserSkills = userSkills.map(normalizeSkill);
  const normalizedJobSkills = jobSkills.map(normalizeSkill);
  
  const matchingSkills = normalizedJobSkills.filter(jobSkill => 
    normalizedUserSkills.some(userSkill => 
      userSkill.includes(jobSkill) ||
      jobSkill.includes(userSkill)
    )
  );

  return (matchingSkills.length / jobSkills.length) * 100;
}

function findBestMatches(userSkills) {
  if (!userSkills || userSkills.length === 0) return [];

  const matches = [];
  const normalizedUserSkills = userSkills.map(normalizeSkill);

  // Check each category in the skill hierarchy
  Object.entries(skillHierarchy).forEach(([category, data]) => {
    const baseSkillsMatch = calculateMatchPercentage(normalizedUserSkills, data.baseSkills);
    const advancedSkillsMatch = calculateMatchPercentage(normalizedUserSkills, data.advancedSkills);
    const allSkills = [...data.baseSkills, ...data.advancedSkills];
    const normalizedAllSkills = allSkills.map(normalizeSkill);
    
    // Get matching and missing skills
    const matchingSkills = allSkills.filter(skill => 
      normalizedUserSkills.some(userSkill => 
        normalizeSkill(skill).includes(userSkill) ||
        userSkill.includes(normalizeSkill(skill))
      )
    );
    
    const missingSkills = allSkills.filter(skill => 
      !normalizedUserSkills.some(userSkill => 
        normalizeSkill(skill).includes(userSkill) ||
        userSkill.includes(normalizeSkill(skill))
      )
    );

    // Calculate overall match percentage with weighted scoring
    const baseWeight = 0.6; // Base skills are more important
    const advancedWeight = 0.4;
    const overallMatch = (baseSkillsMatch * baseWeight) + (advancedSkillsMatch * advancedWeight);

    // Only include matches with some matching skills
    if (matchingSkills.length > 0) {
      // Add each role from the category
      data.roles.forEach(role => {
        matches.push({
          title: role,
          category,
          matchPercentage: overallMatch,
          matchingSkills,
          missingSkills,
          requiredSkills: data.baseSkills,
          optionalSkills: data.advancedSkills
        });
      });
    }
  });

  // Sort matches by match percentage in descending order
  return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
}

module.exports = { findBestMatches, calculateMatchPercentage }; 