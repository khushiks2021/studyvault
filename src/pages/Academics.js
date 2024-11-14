import React, { useEffect, useState } from 'react';
import './Development.css';

const Academics = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [previewLink, setPreviewLink] = useState('');

  useEffect(() => {
    const fetchedResources = [
      { 
        id: 1, 
        name: 'Previous Year Paper - Data Structures', 
        tags: ['Previous Year Paper'], 
        year: '2nd Year', 
        semester: '3rd Sem', 
        branch: 'CSE', 
        pages: 45, 
        downloadLink: 'https://jeppiaarcollege.org/wp-content/uploads/2019/02/II-YEAR-III-SEM-CS8351-DATA-STRUCTURES.pdf', 
        previewLink: 'https://jeppiaarcollege.org/wp-content/uploads/2019/02/II-YEAR-III-SEM-CS8351-DATA-STRUCTURES.pdf', 
        liked: false 
      },
      { 
        id: 2, 
        name: 'Assignment Solutions - Operating Systems', 
        tags: ['Assignment Solutions'], 
        year: '2nd Year', 
        semester: '3rd Sem', 
        branch: 'CSE', 
        pages: 30, 
        downloadLink: 'https://www.vssut.ac.in/lecture_notes/lecture1423726024.pdf', 
        previewLink: 'https://www.vssut.ac.in/lecture_notes/lecture1423726024.pdf', 
        liked: false 
      },
      { 
        id: 3, 
        name: 'Lecture Notes - DBMS', 
        tags: ['Lecture Notes'], 
        year: '3rd Year', 
        semester: '5th Sem', 
        branch: 'CSE', 
        pages: 60, 
        downloadLink: 'https://www.cet.edu.in/noticefiles/279_DBMS%20Complete1.pdf', 
        previewLink: 'https://www.cet.edu.in/noticefiles/279_DBMS%20Complete1.pdf', 
        liked: false 
      },
      { 
        id: 4, 
        name: 'Assignment Solutions - Computer Networks', 
        tags: ['Assignment Solutions'], 
        year: '3rd Year', 
        semester: '5th Sem', 
        branch: 'CSE', 
        pages: 35, 
        downloadLink: 'https://ncert.nic.in/textbook/pdf/lecs110.pdf', 
        previewLink: 'https://ncert.nic.in/textbook/pdf/lecs110.pdf', 
        liked: false 
      },
    ];
    setResources(fetchedResources);
    setFilteredResources(fetchedResources);
  }, []);

  const openPreview = (link) => {
    setPreviewLink(link);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewLink('');
  };

  const handleSort = (option) => {
    setSortOption(option);
    const sortedResources = [...filteredResources].sort((a, b) => {
      if (option === 'name') return a.name.localeCompare(b.name);
      if (option === 'year') return a.year.localeCompare(b.year);
      return 0;
    });
    setFilteredResources(sortedResources);
  };

  const handleFilter = (option) => {
    setFilterOption(option);
    const filtered = resources.filter(resource => resource.tags.includes(option));
    setFilteredResources(filtered.length > 0 ? filtered : resources);
  };

  const toggleLike = (id) => {
    const updatedResources = resources.map(resource =>
      resource.id === id ? { ...resource, liked: !resource.liked } : resource
    );
    setResources(updatedResources);
    setFilteredResources(updatedResources.filter(resource => resource.tags.includes(filterOption) || !filterOption));
  };

  return (
    <div className="development-page">
      <div className="sidebar">
        <h2>Filters & Sort</h2>
        <div className="controls">
          <select className="btn" onChange={(e) => handleSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="year">Year</option>
          </select>
          <select className="btn" onChange={(e) => handleFilter(e.target.value)}>
            <option value="">Filter By</option>
            <option value="Previous Year Paper">Previous Year Paper</option>
            <option value="Assignment Solutions">Assignment Solutions</option>
            <option value="Lecture Notes">Lecture Notes</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="CSE">CSE</option>
          </select>
        </div>
      </div>
      <div className="content-section">
        <div className="hero-section">
          <h1>Academic Resources</h1>
          <p>{filteredResources.length} Resources Found</p>
        </div>
        <div className="resources-section">
          <ul className="resource-list">
            {filteredResources.map((resource) => (
              <li key={resource.id} className="resource-item">
                <div className="resource-details">
                  <h3>{resource.name}</h3>
                  <p>{resource.tags.join(', ')} - {resource.year} - {resource.semester} - {resource.branch}</p>
                  <div className="metadata">
                    <span className="pages">📄 {resource.pages} Pages</span>
                  </div>
                </div>
                <div className="resource-actions">
                  <a href={resource.downloadLink} className="btn">📥 Download</a>
                  <button onClick={() => openPreview(resource.previewLink)} className="btn">👁️ Preview</button>
                </div>
                <button
                  className={`like-button ${resource.liked ? 'liked' : ''}`}
                  onClick={() => toggleLike(resource.id)}
                >
                  {resource.liked ? '❤️' : '🤍'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal for Preview */}
      {showPreview && (
        <div className="preview-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closePreview}>X</button>
            <iframe src={previewLink} title="Preview" width="100%" height="600px"></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Academics;
