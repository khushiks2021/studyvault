import React, { useEffect, useState } from 'react';
import './Development.css'; // Reusing the same CSS

const InternshipPlacement = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [previewLink, setPreviewLink] = useState('');
  const [likedResources, setLikedResources] = useState([]);

  useEffect(() => {
    const fetchedResources = [
      { 
        id: 1, 
        name: 'Interview Preparation Guide', 
        tags: ['Interview Prep'], 
        level: 'Intermediate', 
        downloadLink: 'https://careerdevelopment.princeton.edu/sites/g/files/toruqf1041/files/media/interview_guide_5.pdf', 
        previewLink: 'https://careerdevelopment.princeton.edu/sites/g/files/toruqf1041/files/media/interview_guide_5.pdf', 
        liked: false 
      },
      { 
        id: 2, 
        name: 'Company-Specific Questions - Google', 
        tags: ['Company-Specific', 'Google'], 
        level: 'Advanced', 
        downloadLink: 'https://soft-eng-practicum.github.io/assets/pdfs/Google%20Interview%20Prep%20Guide%20SWE%20.pdf', 
        previewLink: 'https://soft-eng-practicum.github.io/assets/pdfs/Google%20Interview%20Prep%20Guide%20SWE%20.pdf', 
        liked: false 
      },
      { 
        id: 3, 
        name: 'Resume Tips for Tech Roles', 
        tags: ['Resume Tips'], 
        level: 'Beginner', 
        downloadLink: 'https://thetechresume.com/A_Good_Tech_Resume.pdf', 
        previewLink: 'https://thetechresume.com/A_Good_Tech_Resume.pdf', 
        liked: false 
      },
      { 
        id: 4, 
        name: 'Coding Challenges for Placements', 
        tags: ['Coding Challenges'], 
        level: 'Advanced', 
        downloadLink: 'https://i.cs.hku.hk/~provinci/files/b2-programming_challenges.pdf', 
        previewLink: 'https://i.cs.hku.hk/~provinci/files/b2-programming_challenges.pdf', 
        liked: false 
      },
      { 
        id: 5, 
        name: 'HR Round Questions', 
        tags: ['HR Questions'], 
        level: 'Intermediate', 
        downloadLink: 'https://amssoi.org.in/wp-content/uploads/2021/07/HR-Interview-Questions-and-Answers.pdf', 
        previewLink: 'https://amssoi.org.in/wp-content/uploads/2021/07/HR-Interview-Questions-and-Answers.pdf', 
        liked: false 
      },
    ];
    setResources(fetchedResources);
    setFilteredResources(fetchedResources);
  }, []);

  const handleSort = (option) => {
    setSortOption(option);
    const sortedResources = [...filteredResources].sort((a, b) => {
      if (option === 'name') return a.name.localeCompare(b.name);
      if (option === 'level') return a.level.localeCompare(b.level);
      return 0;
    });
    setFilteredResources(sortedResources);
  };

  const handleFilter = (option) => {
    setFilterOption(option);
    const filtered = resources.filter(resource => resource.tags.includes(option));
    setFilteredResources(filtered.length > 0 ? filtered : resources);
  };

  const openPreview = (link) => {
    setPreviewLink(link);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewLink('');
  };

  const toggleLike = (id) => {
    const updatedResources = resources.map(resource =>
      resource.id === id ? { ...resource, liked: !resource.liked } : resource
    );
    setResources(updatedResources);
    setFilteredResources(updatedResources.filter(resource => resource.tags.includes(filterOption) || !filterOption));
  };

  return (
    <div className="development-page"> {/* Reusing the same structure and classes */}
      <div className="sidebar">
        <h2>Filters & Sort</h2>
        <div className="controls">
          <select className="btn" onChange={(e) => handleSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="level">Difficulty Level</option>
          </select>
          <select className="btn" onChange={(e) => handleFilter(e.target.value)}>
            <option value="">Filter By</option>
            <option value="Interview Prep">Interview Prep</option>
            <option value="Company-Specific">Company-Specific</option>
            <option value="Resume Tips">Resume Tips</option>
            <option value="Coding Challenges">Coding Challenges</option>
            <option value="HR Questions">HR Questions</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>
      <div className="content-section">
        <div className="hero-section">
          <h1>Internship & Placement Resources</h1>
          <p>{filteredResources.length} Resources Found</p>
        </div>
        <div className="resources-section">
          <ul className="resource-list">
            {filteredResources.map((resource) => (
              <li key={resource.id} className="resource-item">
                <div className="resource-details">
                  <h3>{resource.name}</h3>
                  <p>{resource.tags.join(', ')} - {resource.level}</p>
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

export default InternshipPlacement;
