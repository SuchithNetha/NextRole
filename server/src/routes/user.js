const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Roadmap = require('../models/Roadmap');

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select('-password')
      .populate('savedRoadmaps');
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error: error.message });
  }
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
  try {
    const { firstName, lastName, skills } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { firstName, lastName, skills },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
});

// Save a roadmap
router.post('/save-roadmap/:roadmapId', auth, async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.roadmapId);
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    const user = await User.findById(req.user._id);
    if (user.savedRoadmaps.includes(roadmap._id)) {
      return res.status(400).json({ message: 'Roadmap already saved' });
    }

    user.savedRoadmaps.push(roadmap._id);
    await user.save();

    res.json({ message: 'Roadmap saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving roadmap', error: error.message });
  }
});

// Remove a saved roadmap
router.delete('/save-roadmap/:roadmapId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.savedRoadmaps = user.savedRoadmaps.filter(
      id => id.toString() !== req.params.roadmapId
    );
    await user.save();

    res.json({ message: 'Roadmap removed from saved items' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing roadmap', error: error.message });
  }
});

// Get saved roadmaps
router.get('/saved-roadmaps', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('savedRoadmaps');
    
    res.json(user.savedRoadmaps);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching saved roadmaps', error: error.message });
  }
});

module.exports = router; 