const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: false
  },
  requiredSkills: [{
    type: String,
    trim: true
  }],
  optionalSkills: [{
    type: String,
    trim: true
  }],
  experienceLevel: {
    type: String,
    enum: ['Entry Level', 'Mid Level', 'Senior', 'Lead'],
    required: true
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance'],
    required: true
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
jobSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job; 