import React, { useEffect, useState } from 'react';
import './Development.css';

const Development = () => {
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
        name: 'Web Development Guide', 
        tags: ['Frontend'], 
        level: 'Beginner', 
        pages: 42, 
        comments: 17, 
        downloadLink: 'https://northell.design/wp-content/uploads/2021/11/A_Complete_Web_Development_Guide_For_Non_Technical_Startup_Founder.pdf', 
        previewLink: 'https://northell.design/wp-content/uploads/2021/11/A_Complete_Web_Development_Guide_For_Non_Technical_Startup_Founder.pdf', 
        liked: false 
      },
      { 
        id: 2, 
        name: 'React Crash Course', 
        tags: ['Frontend'], 
        level: 'Intermediate', 
        pages: 38, 
        comments: 12, 
        downloadLink: 'https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf', 
        previewLink: 'https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf', 
        liked: false 
      },
      { 
        id: 3, 
        name: 'Advanced Node.js', 
        tags: ['Backend'], 
        level: 'Advanced', 
        pages: 65, 
        comments: 23, 
        downloadLink: 'https://www.anuragkapur.com/assets/blog/programming/node/PDF-Guide-Node-Andrew-Mead-v3.pdf', 
        previewLink: 'https://www.anuragkapur.com/assets/blog/programming/node/PDF-Guide-Node-Andrew-Mead-v3.pdf', 
        liked: false 
      },
      { 
        id: 4, 
        name: 'MongoDB Basics', 
        tags: ['Database', 'Backend'], 
        level: 'Beginner', 
        pages: 28, 
        comments: 9, 
        downloadLink: 'https://pepa.holla.cz/wp-content/uploads/2016/07/MongoDB-Basics.pdf', 
        previewLink: 'https://pepa.holla.cz/wp-content/uploads/2016/07/MongoDB-Basics.pdf', 
        liked: false 
      },
      { 
        id: 5, 
        name: 'App Development', 
        tags: ['App Dev'], 
        level: 'Intermediate', 
        pages: 50, 
        comments: 14, 
        downloadLink: 'https://example.com/app-development.pdf', 
        previewLink: 'https://example.com/preview/app-development', 
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
            <option value="level">Difficulty Level</option>
          </select>
          <select className="btn" onChange={(e) => handleFilter(e.target.value)}>
            <option value="">Filter By</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="App Dev">App Dev</option>
            <option value="Database">Database</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>
      <div className="content-section">
        <div className="hero-section">
          <h1>Development Resources</h1>
          <p>{filteredResources.length} Resources Found</p>
        </div>
        <div className="resources-section">
          <ul className="resource-list">
            {filteredResources.map((resource) => (
              <li key={resource.id} className="resource-item">
                <div className="resource-details">
                  <h3>{resource.name}</h3>
                  <p>{(resource.tags && resource.tags.length > 0) ? resource.tags.join(', ') : 'No Tags'} - {resource.level}</p>
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

export default Development;
