const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['Programming', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Version Control', 'Management', 'Soft Skills', 'Design', 'Other'],
    default: 'Other'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);