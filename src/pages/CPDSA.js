import React, { useEffect, useState } from 'react';
import './Development.css'; // Reusing the same CSS

const CompetitiveExams = () => {
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
        name: 'Dynamic Programming Guide', 
        tags: ['DP'], 
        level: 'Advanced', 
        downloadLink: 'https://people.eecs.berkeley.edu/~vazirani/algorithms/chap6.pdf', 
        previewLink: 'https://people.eecs.berkeley.edu/~vazirani/algorithms/chap6.pdf', 
        liked: false 
      },
      { 
        id: 2, 
        name: 'Graph Algorithms', 
        tags: ['Graphs'], 
        level: 'Intermediate', 
        downloadLink: 'https://web.stanford.edu/class/cs97si/06-basic-graph-algorithms.pdf', 
        previewLink: 'https://web.stanford.edu/class/cs97si/06-basic-graph-algorithms.pdf', 
        liked: false 
      },
      { 
        id: 3, 
        name: 'LeetCode 150 Must-Do', 
        tags: ['LeetCode 150'], 
        level: 'Beginner', 
        downloadLink: 'https://leetcode.com/studyplan/top-interview-150/', 
        previewLink: 'https://leetcode.com/studyplan/top-interview-150/', 
        liked: false 
      },
      { 
        id: 4, 
        name: 'Codeforces Problem Set', 
        tags: ['Codeforces'], 
        level: 'Advanced', 
        downloadLink: 'https://codeforces.com/problemset', 
        previewLink: 'https://codeforces.com/problemset', 
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
            <option value="DP">DP</option>
            <option value="Graphs">Graphs</option>
            <option value="LeetCode 150">LeetCode 150</option>
            <option value="Codeforces">Codeforces</option>
          </select>
        </div>
      </div>
      <div className="content-section">
        <div className="hero-section">
          <h1>CP/DSA</h1>
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

export default CompetitiveExams;
