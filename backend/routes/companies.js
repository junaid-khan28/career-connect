const express = require('express');
const { body, validationResult } = require('express-validator');
const Company = require('../models/Company');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/companies
// @desc    Get all companies
// @access  Public
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find({ isActive: true }).sort({ name: 1 });
    res.json(companies);
  } catch (error) {
    console.error('Get companies error:', error);
    res.status(500).json({ message: 'Server error while fetching companies' });
  }
});

// @route   GET /api/companies/:id
// @desc    Get company by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    console.error('Get company error:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(500).json({ message: 'Server error while fetching company' });
  }
});

// @route   POST /api/companies
// @desc    Create a company
// @access  Private
router.post('/', [
  auth,
  body('name').trim().notEmpty().withMessage('Company name is required'),
  body('industry').optional().trim(),
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

    const company = new Company(req.body);
    await company.save();
    
    res.status(201).json(company);
  } catch (error) {
    console.error('Create company error:', error);
    res.status(500).json({ message: 'Server error while creating company' });
  }
});

module.exports = router;