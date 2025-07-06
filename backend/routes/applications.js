const express = require('express');
const { body, validationResult } = require('express-validator');
const JobApplication = require('../models/JobApplication');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/applications
// @desc    Get user's job applications
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const applications = await JobApplication.find({ user: req.user._id })
      .populate({
        path: 'job',
        populate: {
          path: 'company',
          select: 'name logoUrl'
        }
      })
      .sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/applications
// @desc    Create a job application
// @access  Private
router.post('/', [
  auth,
  body('jobId').isMongoId().withMessage('Valid job ID is required'),
  body('coverLetter').optional().trim().isLength({ max: 2000 }).withMessage('Cover letter must be less than 2000 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { jobId, coverLetter, resumeUrl } = req.body;

    // Check if user already applied for this job
    const existingApplication = await JobApplication.findOne({
      job: jobId,
      user: req.user._id
    });

    if (existingApplication) {
      return res.status(400).json({ message: 'You have already applied for this job' });
    }

    const application = new JobApplication({
      job: jobId,
      user: req.user._id,
      coverLetter,
      resumeUrl
    });

    await application.save();
    
    await application.populate({
      path: 'job',
      populate: {
        path: 'company',
        select: 'name logoUrl'
      }
    });

    res.status(201).json(application);
  } catch (error) {
    console.error('Create application error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;