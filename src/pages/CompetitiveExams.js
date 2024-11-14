import React, { useEffect, useState } from 'react';
import './Development.css'; // Reusing the same CSS

const CompetitiveExams = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [previewLink, setPreviewLink] = useState('');

  const itemsPerPage = 2; // Set the number of items per page

  useEffect(() => {
    const fetchedResources = [
      { 
        id: 1, 
        name: 'CAT Preparation Strategy', 
        tags: ['CAT'], 
        level: 'Advanced', 
        pages: 75,
        downloadLink: 'https://northell.design/wp-content/uploads/2021/11/A_Complete_Web_Development_Guide_For_Non_Technical_Startup_Founder.pdf', 
        previewLink: 'https://northell.design/wp-content/uploads/2021/11/A_Complete_Web_Development_Guide_For_Non_Technical_Startup_Founder.pdf', 
        liked: false 
      },
      { 
        id: 2, 
        name: 'UPSC Exam Syllabus', 
        tags: ['UPSC'], 
        level: 'Intermediate', 
        pages: 88,
        downloadLink: 'https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf', 
        previewLink: 'https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf', 
        liked: false 
      },
      { 
        id: 3, 
        name: 'GATE Previous Year Papers', 
        tags: ['GATE'], 
        level: 'Advanced', 
        pages: 63,
        downloadLink: 'https://www.anuragkapur.com/assets/blog/programming/node/PDF-Guide-Node-Andrew-Mead-v3.pdf', 
        previewLink: 'https://www.anuragkapur.com/assets/blog/programming/node/PDF-Guide-Node-Andrew-Mead-v3.pdf', 
        liked: false 
      },
      { 
        id: 4, 
        name: 'Bank PO Practice Papers', 
        tags: ['Bank PO'], 
        level: 'Beginner', 
        pages: 45,
        downloadLink: 'https://pepa.holla.cz/wp-content/uploads/2016/07/MongoDB-Basics.pdf', 
        previewLink: 'https://pepa.holla.cz/wp-content/uploads/2016/07/MongoDB-Basics.pdf', 
        liked: false 
      },
      { 
        id: 5, 
        name: 'SSC CGL Mock Tests', 
        tags: ['SSC CGL'], 
        level: 'Intermediate', 
        pages: 53,
        downloadLink: 'https://tamediacdn.techaheadcorp.com/wp-content/uploads/2019/10/15070937/mobile-application-development-guide-pdf.pdf', 
        previewLink: 'https://tamediacdn.techaheadcorp.com/wp-content/uploads/2019/10/15070937/mobile-application-development-guide-pdf.pdf', 
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
            <option value="CAT">CAT</option>
            <option value="UPSC">UPSC</option>
            <option value="GATE">GATE</option>
            <option value="Bank PO">Bank PO</option>
            <option value="SSC CGL">SSC CGL</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>
      <div className="content-section">
        <div className="hero-section">
          <h1>Competitive Exam Resources</h1>
          <p>{filteredResources.length} Resources Found</p>
        </div>
        <div className="resources-section">
          <ul className="resource-list">
            {filteredResources.map((resource, index) => {
              // Calculate page number based on index and itemsPerPage
              const pageNumber = Math.floor(index / itemsPerPage) + 1;
              return (
                <li key={resource.id} className="resource-item">
                  <div className="resource-details">
                    <h3>{resource.name}</h3>
                    <p>{resource.tags.join(', ')} - {resource.level}</p>
                    <p>📄 {resource.pages} Pages</p>
                   
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
              );
            })}
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
