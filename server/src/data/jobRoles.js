const jobRoles = [
  {
    title: "Full Stack Developer",
    requiredSkills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    optionalSkills: ["TypeScript", "Docker", "AWS", "GraphQL"],
    matchWeight: 1.2
  },
  {
    title: "Frontend Developer",
    requiredSkills: ["React", "HTML", "CSS", "JavaScript", "TypeScript"],
    optionalSkills: ["Redux", "Next.js", "Jest", "SASS"],
    matchWeight: 1.0
  },
  {
    title: "Backend Developer",
    requiredSkills: ["Node.js", "Express", "MongoDB", "Java", "Docker"],
    optionalSkills: ["Python", "AWS", "Kubernetes", "SQL"],
    matchWeight: 1.0
  },
  {
    title: "Data Scientist",
    requiredSkills: ["Python", "Pandas", "NumPy", "Machine Learning", "SQL"],
    optionalSkills: ["TensorFlow", "Scikit-learn", "Data Visualization", "Statistics"],
    matchWeight: 1.0
  },
  {
    title: "AI/ML Engineer",
    requiredSkills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP"],
    optionalSkills: ["Deep Learning", "Computer Vision", "AWS", "Docker"],
    matchWeight: 1.1
  },
  {
    title: "DevOps Engineer",
    requiredSkills: ["Docker", "Kubernetes", "AWS", "Linux", "CI/CD"],
    optionalSkills: ["Terraform", "Jenkins", "Python", "Shell Scripting"],
    matchWeight: 1.0
  },
  {
    title: "Mobile App Developer",
    requiredSkills: ["React Native", "Flutter", "Dart", "Java", "Android"],
    optionalSkills: ["iOS", "Swift", "Firebase", "Redux"],
    matchWeight: 1.0
  },
  {
    title: "Software Engineer",
    requiredSkills: ["Java", "Data Structures", "OOP", "Git", "System Design"],
    optionalSkills: ["Design Patterns", "Testing", "CI/CD", "Cloud"],
    matchWeight: 1.0
  },
  {
    title: "Cloud Engineer",
    requiredSkills: ["AWS", "Azure", "Linux", "Terraform", "Docker"],
    optionalSkills: ["Kubernetes", "Python", "CI/CD", "Networking"],
    matchWeight: 1.0
  },
  {
    title: "Cybersecurity Analyst",
    requiredSkills: ["Networking", "Linux", "Python", "Ethical Hacking", "Firewalls"],
    optionalSkills: ["SIEM", "Penetration Testing", "Security Tools", "Incident Response"],
    matchWeight: 1.0
  }
];

module.exports = jobRoles; 