import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [category, setCategory] = useState('academics');
  const [message, setMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [tags, setTags] = useState({});
  const [newTag, setNewTag] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const categories = ['academics', 'Competitive Exams', 'CP/DSA', 'development', 'interview/placement'];

  useEffect(() => {
    // Reset message after 5 seconds
    if (message) {
      const timer = setTimeout(() => setMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const validateForm = () => {
    const validationErrors = {};

    if (!file) {
      validationErrors.file = 'Please select a file to upload';
    }

    if (!fileName.trim()) {
      validationErrors.fileName = 'Please provide a name for the file';
    }

    if (file && !['application/pdf'].includes(file.type)) {
      validationErrors.fileType = 'Please upload a valid PDF file';
    }

    if (file && file.size > 5 * 1024 * 1024) {
      validationErrors.fileSize = 'File size exceeds the 5MB limit';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setFileName(selectedFile.name); // Automatically set file name when a file is selected
    }
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const onTagChange = (e) => {
    setNewTag(e.target.value);
  };

  const addTag = () => {
    if (newTag.trim() && !tags[category]?.includes(newTag.trim())) {
      setTags({
        ...tags,
        [category]: [...(tags[category] || []), newTag.trim()],
      });
      setNewTag('');
    }
  };

  const onFileUpload = async () => {
    if (!validateForm()) return;
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('category', category);
    formData.append('tags', JSON.stringify(tags[category] || []));
  
    try {
      await axios.post('http://localhost:5001/api/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('File uploaded successfully');
      resetForm();
      navigate(`/files/${category}`);
    } catch (err) {
      setMessage(`Error uploading file: ${err.response?.data?.message || err.message}`);
    }
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    onFileUpload();
  };

  const resetForm = () => {
    setFile(null);
    setFileName('');
    setNewTag('');
    setErrors({});
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`file-upload ${isExpanded ? 'file-upload--expanded' : ''}`}>
      <button className="file-upload__button" onClick={toggleExpand}>
        <span className="file-upload__button-text">Upload File</span>
        <i className="fas fa-upload"></i>
      </button>
      {isExpanded && (
        <form className="file-upload__form" onSubmit={onSubmit}>
          <div className="file-upload__input-group">
            <input
              type="file"
              id="file-upload-input"
              className={`file-upload__file-input ${errors.file ? 'file-upload__file-input--error' : ''}`}
              onChange={onFileChange}
            />
            <label htmlFor="file-upload-input" className="file-upload__input-label">
              Choose a file
            </label>
            {errors.file && <p className="file-upload__error-message">{errors.file}</p>}
          </div>

          <div className="file-upload__input-group">
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter a name for the file"
              className={`file-upload__file-name-input ${errors.fileName ? 'file-upload__file-name-input--error' : ''}`}
            />
            {errors.fileName && <p className="file-upload__error-message">{errors.fileName}</p>}
          </div>

          <CategorySelect categories={categories} category={category} onChange={onCategoryChange} />

          {categories.includes(category) && (
            <TagInput
              category={category}
              tags={tags}
              newTag={newTag}
              onTagChange={onTagChange}
              onAddTag={addTag}
            />
          )}

          <button type="submit" className="file-upload__submit-button">Submit</button>
          {message && <p className="file-upload__message">{message}</p>}
        </form>
      )}
    </div>
  );
};

const CategorySelect = ({ categories, category, onChange }) => (
  <div className="file-upload__input-group">
    <select value={category} onChange={onChange} className="file-upload__category-select">
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>
);

const TagInput = ({ category, tags, newTag, onTagChange, onAddTag }) => (
  <div className="file-upload__tags-section">
    <div className="file-upload__input-group">
      <input
        type="text"
        value={newTag}
        onChange={onTagChange}
        placeholder="Add a tag"
        className="file-upload__tag-input"
      />
      <button type="button" onClick={onAddTag} className="file-upload__add-tag-button">Add Tag</button>
    </div>
    <ul className="file-upload__tags-list">
      {(tags[category] || []).map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  </div>
);

export default FileUpload;
