const express = require('express');
const { body, validationResult } = require('express-validator');
const Job = require('../models/Job');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/jobs
// @desc    Get all jobs
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { featured, limit } = req.query;
    let query = { status: 'active' };
    
    if (featured === 'true') {
      query.isFeatured = true;
    }

    let jobsQuery = Job.find(query)
      .populate('company', 'name logoUrl industry location')
      .sort({ createdAt: -1 });

    if (limit) {
      jobsQuery = jobsQuery.limit(parseInt(limit));
    }

    const jobs = await jobsQuery;
    
    // Transform the data to match frontend expectations
    const transformedJobs = jobs.map(job => ({
      ...job.toObject(),
      companies: job.company // Rename company to companies for frontend compatibility
    }));
    
    res.json(transformedJobs);
  } catch (error) {
    console.error('Get jobs error:', error);
    res.status(500).json({ message: 'Server error while fetching jobs' });
  }
});

// @route   GET /api/jobs/:id
// @desc    Get job by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate('company', 'name logoUrl industry location websiteUrl description')
      .populate('postedBy', 'firstName lastName');
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    // Transform the data to match frontend expectations
    const transformedJob = {
      ...job.toObject(),
      companies: job.company // Rename company to companies for frontend compatibility
    };
    
    res.json(transformedJob);
  } catch (error) {
    console.error('Get job error:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(500).json({ message: 'Server error while fetching job' });
  }
});

// @route   POST /api/jobs
// @desc    Create a job
// @access  Private
router.post('/', [
  auth,
  body('title').trim().notEmpty().withMessage('Job title is required'),
  body('description').trim().notEmpty().withMessage('Job description is required'),
  body('company').isMongoId().withMessage('Valid company ID is required'),
  body('location').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: errors.array() 
      });
    }

    const jobData = {
      ...req.body,
      postedBy: req.user._id
    };

    const job = new Job(jobData);
    await job.save();
    
    await job.populate('company', 'name logoUrl industry location');
    
    // Transform the data to match frontend expectations
    const transformedJob = {
      ...job.toObject(),
      companies: job.company
    };
    
    res.status(201).json(transformedJob);
  } catch (error) {
    console.error('Create job error:', error);
    res.status(500).json({ message: 'Server error while creating job' });
  }
});

// @route   PUT /api/jobs/:id
// @desc    Update a job
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if user owns the job
    if (job.postedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this job' });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('company', 'name logoUrl industry location');

    // Transform the data to match frontend expectations
    const transformedJob = {
      ...updatedJob.toObject(),
      companies: updatedJob.company
    };

    res.json(transformedJob);
  } catch (error) {
    console.error('Update job error:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(500).json({ message: 'Server error while updating job' });
  }
});

module.exports = router;