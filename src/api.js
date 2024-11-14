import axios from 'axios';

const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  axios.post('http://localhost:5001/routes/uploads', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  .then(response => {
    console.log('File uploaded successfully:', response.data);
  })
  .catch(error => {
    console.error('Error uploading file:', error);
  });
};