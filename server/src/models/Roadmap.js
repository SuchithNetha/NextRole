const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true,
    enum: ['Technology', 'Marketing', 'Design', 'Business', 'Finance', 'Healthcare', 'Education', 'Other']
  },
  experienceLevel: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'All Levels']
  },
  steps: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    skills: [{
      type: String
    }],
    resources: [{
      title: String,
      url: String,
      type: {
        type: String,
        enum: ['Article', 'Video', 'Course', 'Book', 'Other']
      }
    }],
    estimatedTime: {
      type: String
    }
  }],
  image: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
roadmapSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Roadmap = mongoose.model('Roadmap', roadmapSchema);

module.exports = Roadmap; 