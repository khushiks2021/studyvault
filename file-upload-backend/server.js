const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const File = require('./models/File'); // Adjust the path as needed
const app = express();
// Middleware to parse JSON bodies
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));


// MongoDB connection setup
mongoose.connect('mongodb+srv://Khushiks21:EyDldpprllgTYTZT@khushiks21.a2bs3.mongodb.net/fileUploads?retryWrites=true&w=majority&appName=Khushiks21', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Failed to connect to MongoDB', err);
});

// Set up multer storage
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.category || 'default';
    const uploadPath = path.join(__dirname, `pages/${category}`);
    
    // Create directory if it doesn't exist
    fs.mkdirSync(uploadPath, { recursive: true });
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });



// Sample route
app.get('/', (req, res) => {
  res.send('Hello, this is the backend!');
});

// Endpoint to handle file uploads
app.post('/api/files/upload', upload.single('file'), async (req, res) => {
    console.log('Received upload request');
    console.log(req.body);  // Log the body to see what data is coming in
    console.log(req.file);  // Log the file data
  
    const { fileName, category, tags } = req.body;
  
    // Create a new file entry in the database
    const newFile = new File({
      fileName,
      category,
      tags: JSON.parse(tags || '[]'), // Fallback to empty array if tags are not provided
      filePath: `/uploads/${category}/${req.file.originalname}`
    });
  
    try {
      await newFile.save();
      res.status(200).send({ message: 'File uploaded successfully' });
    } catch (err) {
      res.status(500).send({ message: 'Error uploading file', error: err.message });
    }
  });
  



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
