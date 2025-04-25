const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Roadmap = require('../models/Roadmap');

// Get all roadmaps with optional filtering
router.get('/', async (req, res) => {
  try {
    const { industry, experienceLevel } = req.query;
    const query = {};

    if (industry) query.industry = industry;
    if (experienceLevel) query.experienceLevel = experienceLevel;

    const roadmaps = await Roadmap.find(query)
      .populate('createdBy', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.json(roadmaps);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching roadmaps', error: error.message });
  }
});

// Get a single roadmap
router.get('/:id', async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id)
      .populate('createdBy', 'firstName lastName');

    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    res.json(roadmap);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching roadmap', error: error.message });
  }
});

// Create a new roadmap (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const roadmap = new Roadmap({
      ...req.body,
      createdBy: req.user._id
    });

    await roadmap.save();
    res.status(201).json(roadmap);
  } catch (error) {
    res.status(500).json({ message: 'Error creating roadmap', error: error.message });
  }
});

// Update a roadmap (protected route)
router.put('/:id', auth, async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);

    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    // Check if user is the creator
    if (roadmap.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this roadmap' });
    }

    const updatedRoadmap = await Roadmap.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedRoadmap);
  } catch (error) {
    res.status(500).json({ message: 'Error updating roadmap', error: error.message });
  }
});

// Delete a roadmap (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);

    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    // Check if user is the creator
    if (roadmap.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this roadmap' });
    }

    await roadmap.remove();
    res.json({ message: 'Roadmap deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting roadmap', error: error.message });
  }
});

module.exports = router; 