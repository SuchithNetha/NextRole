const skillHierarchy = {
  "Frontend": {
    industry: "Technology",
    experienceLevel: "All Levels",
    baseSkills: ["HTML", "CSS", "JavaScript"],
    advancedSkills: ["React", "TypeScript", "Next.js"],
    roles: ["Frontend Developer", "UI Developer", "Web Developer"],
    careerStages: [
      {
        title: "Junior Frontend Developer",
        description: "Entry-level position focusing on basic web development",
        timeframe: "0-2 years",
        experienceLevel: "Beginner",
        skills: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"]
      },
      {
        title: "Frontend Developer",
        description: "Mid-level position with focus on modern frameworks",
        timeframe: "2-4 years",
        experienceLevel: "Intermediate",
        skills: ["React", "TypeScript", "State Management", "Testing"]
      },
      {
        title: "Senior Frontend Developer",
        description: "Advanced position with focus on architecture and performance",
        timeframe: "4-6 years",
        experienceLevel: "Advanced",
        skills: ["Performance Optimization", "Architecture", "Mentoring"]
      },
      {
        title: "Frontend Lead",
        description: "Leadership position managing frontend teams",
        timeframe: "6-8 years",
        experienceLevel: "Advanced",
        skills: ["Team Leadership", "Technical Strategy", "Project Management"]
      },
      {
        title: "Frontend Architect",
        description: "Expert position focusing on system design and innovation",
        timeframe: "8+ years",
        skills: ["System Design", "Technical Vision", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "HTML", description: "Learn HTML5 fundamentals and semantic markup" },
        { skill: "CSS", description: "Master CSS3, Flexbox, and Grid layout" },
        { skill: "JavaScript", description: "Understand JavaScript basics and DOM manipulation" }
      ],
      intermediate: [
        { skill: "React", description: "Learn React fundamentals and component architecture" },
        { skill: "TypeScript", description: "Add type safety to your JavaScript code" },
        { skill: "Next.js", description: "Build full-stack applications with React" }
      ],
      advanced: [
        { skill: "State Management", description: "Learn Redux or Context API" },
        { skill: "Testing", description: "Master Jest and React Testing Library" },
        { skill: "Performance", description: "Optimize web applications" }
      ]
    }
  },
  "Backend": {
    baseSkills: ["Node.js", "Express", "MongoDB"],
    advancedSkills: ["Python", "Java", "SQL"],
    roles: ["Backend Developer", "API Developer", "Server Developer"],
    careerStages: [
      {
        title: "Junior Backend Developer",
        description: "Entry-level position focusing on basic server-side development",
        timeframe: "0-2 years",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
      },
      {
        title: "Backend Developer",
        description: "Mid-level position with focus on system design",
        timeframe: "2-4 years",
        skills: ["Microservices", "Database Design", "Caching"]
      },
      {
        title: "Senior Backend Developer",
        description: "Advanced position with focus on scalability",
        timeframe: "4-6 years",
        skills: ["System Architecture", "Performance", "Security"]
      },
      {
        title: "Backend Lead",
        description: "Leadership position managing backend teams",
        timeframe: "6-8 years",
        skills: ["Team Leadership", "Technical Strategy", "Project Management"]
      },
      {
        title: "Backend Architect",
        description: "Expert position focusing on system design and innovation",
        timeframe: "8+ years",
        skills: ["System Design", "Technical Vision", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "Node.js", description: "Learn Node.js fundamentals" },
        { skill: "Express", description: "Build RESTful APIs with Express" },
        { skill: "MongoDB", description: "Master NoSQL database concepts" }
      ],
      intermediate: [
        { skill: "Python", description: "Learn Python for backend development" },
        { skill: "Java", description: "Understand Java Spring framework" },
        { skill: "SQL", description: "Master relational database design" }
      ],
      advanced: [
        { skill: "Microservices", description: "Design and implement microservices" },
        { skill: "Security", description: "Implement authentication and authorization" },
        { skill: "Scaling", description: "Learn horizontal and vertical scaling" }
      ]
    }
  },
  "Full Stack": {
    baseSkills: ["JavaScript", "Node.js", "React"],
    advancedSkills: ["MongoDB", "Express", "TypeScript"],
    roles: ["Full Stack Developer", "Web Developer", "Software Engineer"],
    careerStages: [
      {
        title: "Junior Full Stack Developer",
        description: "Entry-level position with basic full stack skills",
        timeframe: "0-2 years",
        skills: ["HTML/CSS", "JavaScript", "Node.js", "Basic Databases"]
      },
      {
        title: "Full Stack Developer",
        description: "Mid-level position with modern stack expertise",
        timeframe: "2-4 years",
        skills: ["React", "Express", "MongoDB", "TypeScript"]
      },
      {
        title: "Senior Full Stack Developer",
        description: "Advanced position with architecture skills",
        timeframe: "4-6 years",
        skills: ["System Design", "DevOps", "Performance"]
      },
      {
        title: "Full Stack Lead",
        description: "Leadership position managing full stack teams",
        timeframe: "6-8 years",
        skills: ["Team Leadership", "Technical Strategy", "Project Management"]
      },
      {
        title: "Full Stack Architect",
        description: "Expert position focusing on system design and innovation",
        timeframe: "8+ years",
        skills: ["System Design", "Technical Vision", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "Frontend Basics", description: "HTML, CSS, JavaScript fundamentals" },
        { skill: "Backend Basics", description: "Node.js and Express fundamentals" },
        { skill: "Database", description: "MongoDB and SQL basics" }
      ],
      intermediate: [
        { skill: "React", description: "Build interactive UIs with React" },
        { skill: "API Design", description: "Design and implement RESTful APIs" },
        { skill: "TypeScript", description: "Add type safety to your stack" }
      ],
      advanced: [
        { skill: "DevOps", description: "Learn CI/CD and deployment" },
        { skill: "Architecture", description: "Design scalable applications" },
        { skill: "Testing", description: "Implement end-to-end testing" }
      ]
    }
  },
  "DevOps": {
    baseSkills: ["Linux", "Docker", "Git"],
    advancedSkills: ["AWS", "Kubernetes", "CI/CD"],
    roles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer"],
    careerStages: [
      {
        title: "Junior DevOps Engineer",
        description: "Entry-level position focusing on basic DevOps practices",
        timeframe: "0-2 years",
        skills: ["Linux", "Docker", "Git", "Basic Scripting"]
      },
      {
        title: "DevOps Engineer",
        description: "Mid-level position with cloud expertise",
        timeframe: "2-4 years",
        skills: ["AWS", "CI/CD", "Infrastructure as Code"]
      },
      {
        title: "Senior DevOps Engineer",
        description: "Advanced position with architecture skills",
        timeframe: "4-6 years",
        skills: ["System Architecture", "Security", "Performance"]
      },
      {
        title: "DevOps Lead",
        description: "Leadership position managing DevOps teams",
        timeframe: "6-8 years",
        skills: ["Team Leadership", "Technical Strategy", "Project Management"]
      },
      {
        title: "DevOps Architect",
        description: "Expert position focusing on system design and innovation",
        timeframe: "8+ years",
        skills: ["System Design", "Technical Vision", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "Linux", description: "Master Linux command line" },
        { skill: "Docker", description: "Learn containerization basics" },
        { skill: "Git", description: "Understand version control" }
      ],
      intermediate: [
        { skill: "AWS", description: "Learn cloud infrastructure" },
        { skill: "Kubernetes", description: "Master container orchestration" },
        { skill: "CI/CD", description: "Implement continuous integration" }
      ],
      advanced: [
        { skill: "Infrastructure as Code", description: "Learn Terraform or CloudFormation" },
        { skill: "Monitoring", description: "Implement logging and monitoring" },
        { skill: "Security", description: "Master cloud security practices" }
      ]
    }
  },
  "Data Science": {
    industry: "Technology",
    experienceLevel: "Intermediate",
    baseSkills: ["Python", "Pandas", "NumPy"],
    advancedSkills: ["Machine Learning", "TensorFlow", "SQL"],
    roles: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
    careerStages: [
      {
        title: "Junior Data Scientist",
        description: "Entry-level position focusing on data analysis",
        timeframe: "0-2 years",
        experienceLevel: "Intermediate",
        skills: ["Python", "Pandas", "Data Visualization", "Basic Statistics"]
      },
      {
        title: "Data Scientist",
        description: "Mid-level position with ML expertise",
        timeframe: "2-4 years",
        experienceLevel: "Intermediate",
        skills: ["Machine Learning", "Deep Learning", "Big Data"]
      },
      {
        title: "Senior Data Scientist",
        description: "Advanced position with research skills",
        timeframe: "4-6 years",
        experienceLevel: "Advanced",
        skills: ["Research", "Model Deployment", "Team Leadership"]
      },
      {
        title: "Lead Data Scientist",
        description: "Leadership position managing data science teams",
        timeframe: "6-8 years",
        skills: ["Team Leadership", "Technical Strategy", "Project Management"]
      },
      {
        title: "Chief Data Scientist",
        description: "Executive position focusing on data strategy",
        timeframe: "8+ years",
        skills: ["Data Strategy", "Business Intelligence", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "Python", description: "Learn Python programming" },
        { skill: "Pandas", description: "Master data manipulation" },
        { skill: "NumPy", description: "Understand numerical computing" }
      ],
      intermediate: [
        { skill: "Machine Learning", description: "Learn ML fundamentals" },
        { skill: "TensorFlow", description: "Build neural networks" },
        { skill: "SQL", description: "Master database queries" }
      ],
      advanced: [
        { skill: "Deep Learning", description: "Advanced neural networks" },
        { skill: "Big Data", description: "Work with large datasets" },
        { skill: "Deployment", description: "Deploy ML models" }
      ]
    }
  },
  "Mobile": {
    baseSkills: ["JavaScript", "React Native", "Flutter"],
    advancedSkills: ["iOS", "Android", "Dart"],
    roles: ["Mobile Developer", "React Native Developer", "Flutter Developer"],
    careerStages: [
      {
        title: "Junior Mobile Developer",
        description: "Entry-level position focusing on basic mobile development",
        timeframe: "0-2 years",
        skills: ["React Native", "Flutter", "Basic UI/UX"]
      },
      {
        title: "Mobile Developer",
        description: "Mid-level position with platform expertise",
        timeframe: "2-4 years",
        skills: ["iOS", "Android", "Native Development"]
      },
      {
        title: "Senior Mobile Developer",
        description: "Advanced position with architecture skills",
        timeframe: "4-6 years",
        skills: ["Architecture", "Performance", "Security"]
      },
      {
        title: "Mobile Lead",
        description: "Leadership position managing mobile teams",
        timeframe: "6-8 years",
        skills: ["Team Leadership", "Technical Strategy", "Project Management"]
      },
      {
        title: "Mobile Architect",
        description: "Expert position focusing on system design and innovation",
        timeframe: "8+ years",
        skills: ["System Design", "Technical Vision", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "JavaScript", description: "Learn JavaScript fundamentals" },
        { skill: "React Native", description: "Build cross-platform apps" },
        { skill: "Flutter", description: "Create beautiful UIs with Flutter" }
      ],
      intermediate: [
        { skill: "iOS", description: "Learn Swift and iOS development" },
        { skill: "Android", description: "Master Kotlin and Android" },
        { skill: "Dart", description: "Understand Flutter's language" }
      ],
      advanced: [
        { skill: "Performance", description: "Optimize mobile apps" },
        { skill: "Testing", description: "Implement mobile testing" },
        { skill: "Publishing", description: "Deploy to app stores" }
      ]
    }
  },
  "Digital Marketing": {
    industry: "Marketing",
    experienceLevel: "Beginner",
    baseSkills: ["SEO", "Content Marketing", "Social Media"],
    advancedSkills: ["Analytics", "PPC", "Email Marketing"],
    roles: ["Digital Marketer", "Marketing Specialist", "Content Strategist"],
    careerStages: [
      {
        title: "Marketing Assistant",
        description: "Entry-level position focusing on basic marketing tasks",
        timeframe: "0-2 years",
        experienceLevel: "Beginner",
        skills: ["Content Creation", "Social Media", "Basic Analytics"]
      },
      {
        title: "Digital Marketing Specialist",
        description: "Mid-level position with campaign expertise",
        timeframe: "2-4 years",
        experienceLevel: "Intermediate",
        skills: ["Campaign Management", "SEO", "PPC"]
      },
      {
        title: "Senior Digital Marketer",
        description: "Advanced position with strategy skills",
        timeframe: "4-6 years",
        skills: ["Strategy Development", "Team Management", "Budgeting"]
      },
      {
        title: "Marketing Manager",
        description: "Leadership position managing marketing teams",
        timeframe: "6-8 years",
        skills: ["Team Leadership", "Strategy", "Project Management"]
      },
      {
        title: "Marketing Director",
        description: "Executive position focusing on marketing strategy",
        timeframe: "8+ years",
        skills: ["Business Strategy", "Brand Management", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "SEO", description: "Learn search engine optimization basics" },
        { skill: "Content Marketing", description: "Master content creation and strategy" },
        { skill: "Social Media", description: "Understand social media marketing" }
      ],
      intermediate: [
        { skill: "Analytics", description: "Learn data analysis and reporting" },
        { skill: "PPC", description: "Master pay-per-click advertising" },
        { skill: "Email Marketing", description: "Understand email campaign management" }
      ],
      advanced: [
        { skill: "Strategy", description: "Develop comprehensive marketing strategies" },
        { skill: "Automation", description: "Implement marketing automation" },
        { skill: "Leadership", description: "Lead marketing teams and initiatives" }
      ]
    }
  },
  "UX/UI Design": {
    baseSkills: ["Figma", "User Research", "Wireframing"],
    advancedSkills: ["Prototyping", "Interaction Design", "Design Systems"],
    roles: ["UX Designer", "UI Designer", "Product Designer"],
    careerStages: [
      {
        title: "Junior UX/UI Designer",
        description: "Entry-level position focusing on basic design tasks",
        timeframe: "0-2 years",
        skills: ["Wireframing", "Basic UI Design", "User Research"]
      },
      {
        title: "UX/UI Designer",
        description: "Mid-level position with design expertise",
        timeframe: "2-4 years",
        skills: ["Prototyping", "Interaction Design", "Design Systems"]
      },
      {
        title: "Senior UX/UI Designer",
        description: "Advanced position with strategy skills",
        timeframe: "4-6 years",
        skills: ["Design Strategy", "Team Management", "User Testing"]
      },
      {
        title: "Design Lead",
        description: "Leadership position managing design teams",
        timeframe: "6-8 years",
        skills: ["Team Leadership", "Design Strategy", "Project Management"]
      },
      {
        title: "Design Director",
        description: "Executive position focusing on design strategy",
        timeframe: "8+ years",
        skills: ["Design Vision", "Brand Strategy", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "Figma", description: "Learn design tool fundamentals" },
        { skill: "User Research", description: "Understand user research methods" },
        { skill: "Wireframing", description: "Master wireframe creation" }
      ],
      intermediate: [
        { skill: "Prototyping", description: "Create interactive prototypes" },
        { skill: "Interaction Design", description: "Design user interactions" },
        { skill: "Design Systems", description: "Build consistent design systems" }
      ],
      advanced: [
        { skill: "Accessibility", description: "Implement accessible design" },
        { skill: "Strategy", description: "Develop design strategies" },
        { skill: "Leadership", description: "Lead design teams" }
      ]
    }
  },
  "Project Management": {
    baseSkills: ["Agile", "Scrum", "Communication"],
    advancedSkills: ["Risk Management", "Budgeting", "Stakeholder Management"],
    roles: ["Project Manager", "Scrum Master", "Program Manager"],
    careerStages: [
      {
        title: "Project Coordinator",
        description: "Entry-level position focusing on basic project tasks",
        timeframe: "0-2 years",
        skills: ["Basic Project Management", "Communication", "Documentation"]
      },
      {
        title: "Project Manager",
        description: "Mid-level position with management expertise",
        timeframe: "2-4 years",
        skills: ["Agile", "Scrum", "Risk Management"]
      },
      {
        title: "Senior Project Manager",
        description: "Advanced position with program management skills",
        timeframe: "4-6 years",
        skills: ["Program Management", "Budgeting", "Team Leadership"]
      },
      {
        title: "Program Manager",
        description: "Leadership position managing multiple projects",
        timeframe: "6-8 years",
        skills: ["Portfolio Management", "Strategy", "Stakeholder Management"]
      },
      {
        title: "Program Director",
        description: "Executive position focusing on program strategy",
        timeframe: "8+ years",
        skills: ["Strategic Planning", "Resource Management", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "Agile", description: "Learn Agile methodologies" },
        { skill: "Scrum", description: "Master Scrum framework" },
        { skill: "Communication", description: "Develop communication skills" }
      ],
      intermediate: [
        { skill: "Risk Management", description: "Identify and manage project risks" },
        { skill: "Budgeting", description: "Master project budgeting" },
        { skill: "Stakeholder Management", description: "Manage stakeholder relationships" }
      ],
      advanced: [
        { skill: "Strategy", description: "Develop project strategies" },
        { skill: "Leadership", description: "Lead project teams" },
        { skill: "Portfolio Management", description: "Manage multiple projects" }
      ]
    }
  },
  "Financial Analysis": {
    baseSkills: ["Excel", "Financial Modeling", "Data Analysis"],
    advancedSkills: ["Risk Assessment", "Investment Analysis", "Financial Planning"],
    roles: ["Financial Analyst", "Investment Analyst", "Financial Planner"],
    careerStages: [
      {
        title: "Junior Financial Analyst",
        description: "Entry-level position focusing on basic financial analysis",
        timeframe: "0-2 years",
        skills: ["Excel", "Basic Financial Modeling", "Data Analysis"]
      },
      {
        title: "Financial Analyst",
        description: "Mid-level position with analysis expertise",
        timeframe: "2-4 years",
        skills: ["Financial Modeling", "Risk Assessment", "Investment Analysis"]
      },
      {
        title: "Senior Financial Analyst",
        description: "Advanced position with strategic skills",
        timeframe: "4-6 years",
        skills: ["Strategic Planning", "Team Management", "Budgeting"]
      },
      {
        title: "Finance Manager",
        description: "Leadership position managing finance teams",
        timeframe: "6-8 years",
        skills: ["Team Leadership", "Financial Strategy", "Project Management"]
      },
      {
        title: "Finance Director",
        description: "Executive position focusing on financial strategy",
        timeframe: "8+ years",
        skills: ["Financial Strategy", "Business Planning", "Innovation"]
      }
    ],
    roadmap: {
      beginner: [
        { skill: "Excel", description: "Master Excel for financial analysis" },
        { skill: "Financial Modeling", description: "Learn financial modeling basics" },
        { skill: "Data Analysis", description: "Understand data analysis techniques" }
      ],
      intermediate: [
        { skill: "Risk Assessment", description: "Learn risk assessment methods" },
        { skill: "Investment Analysis", description: "Master investment analysis" },
        { skill: "Financial Planning", description: "Understand financial planning" }
      ],
      advanced: [
        { skill: "Strategy", description: "Develop financial strategies" },
        { skill: "Leadership", description: "Lead financial teams" },
        { skill: "Portfolio Management", description: "Manage investment portfolios" }
      ]
    }
  }
};

const skillCombinations = {
  "Frontend + Backend": {
    skills: ["React", "Node.js", "Express", "MongoDB"],
    roles: ["Full Stack Developer", "Web Developer"],
    path: "Full Stack Development"
  },
  "Frontend + DevOps": {
    skills: ["React", "Docker", "AWS", "CI/CD"],
    roles: ["Frontend DevOps Engineer", "Web Infrastructure Engineer"],
    path: "Frontend Infrastructure"
  },
  "Backend + DevOps": {
    skills: ["Node.js", "Docker", "AWS", "Kubernetes"],
    roles: ["Backend DevOps Engineer", "Cloud Backend Developer"],
    path: "Backend Infrastructure"
  },
  "Data Science + Backend": {
    skills: ["Python", "Node.js", "Machine Learning", "SQL"],
    roles: ["Data Engineer", "Backend Data Scientist"],
    path: "Data Engineering"
  },
  "Mobile + Backend": {
    skills: ["React Native", "Node.js", "MongoDB", "Express"],
    roles: ["Full Stack Mobile Developer", "Mobile Backend Developer"],
    path: "Mobile Full Stack"
  }
};

module.exports = { skillHierarchy, skillCombinations }; 