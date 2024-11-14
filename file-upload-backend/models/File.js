const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  filePath: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', fileSchema);
