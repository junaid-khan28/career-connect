const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'interviewed', 'offered', 'rejected', 'withdrawn'],
    default: 'pending'
  },
  coverLetter: {
    type: String,
    maxlength: 2000
  },
  resumeUrl: {
    type: String
  }
}, {
  timestamps: true
});

// Ensure user can only apply once per job
jobApplicationSchema.index({ job: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('JobApplication', jobApplicationSchema);