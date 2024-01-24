const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  developerName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  hostedURL: {
    type: String,
    required: true,
  },
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
