const { skillHierarchy, skillCombinations } = require('../data/skillHierarchy');
const { calculateMatchPercentage } = require('./skillMatcher');

function analyzeSkills(userSkills) {
  const domains = [];
  const combinations = [];
  const recommendations = [];

  // Analyze each domain
  Object.entries(skillHierarchy).forEach(([domain, data]) => {
    const baseMatchPercentage = calculateMatchPercentage(userSkills, data.baseSkills);
    const advancedMatchPercentage = calculateMatchPercentage(userSkills, data.advancedSkills);
    const allSkills = [...data.baseSkills, ...data.advancedSkills];

    const matchingSkills = allSkills.filter(skill => 
      userSkills.some(userSkill => 
        userSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    );

    const missingSkills = allSkills.filter(skill => 
      !userSkills.some(userSkill => 
        userSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    );

    domains.push({
      domain,
      baseMatchPercentage,
      advancedMatchPercentage,
      matchingSkills,
      missingSkills,
      roles: data.roles
    });

    // Add domain-based recommendations if match percentage is high
    if (baseMatchPercentage > 60) {
      recommendations.push({
        type: 'domain',
        name: domain,
        matchPercentage: baseMatchPercentage,
        roles: data.roles,
        path: domain
      });
    }
  });

  // Analyze skill combinations
  Object.entries(skillCombinations).forEach(([name, data]) => {
    const matchPercentage = calculateMatchPercentage(userSkills, data.skills);
    const matchingSkills = data.skills.filter(skill => 
      userSkills.some(userSkill => 
        userSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    );

    const missingSkills = data.skills.filter(skill => 
      !userSkills.some(userSkill => 
        userSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    );

    combinations.push({
      name,
      matchPercentage,
      matchingSkills,
      missingSkills,
      roles: data.roles,
      path: data.path
    });

    // Add combination-based recommendations if match percentage is high
    if (matchPercentage > 50) {
      recommendations.push({
        type: 'combination',
        name,
        matchPercentage,
        roles: data.roles,
        path: data.path
      });
    }
  });

  // Sort recommendations by match percentage
  recommendations.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return {
    domains: domains.sort((a, b) => b.baseMatchPercentage - a.baseMatchPercentage),
    combinations: combinations.sort((a, b) => b.matchPercentage - a.matchPercentage),
    recommendations: recommendations.slice(0, 5) // Return top 5 recommendations
  };
}

module.exports = { analyzeSkills }; 