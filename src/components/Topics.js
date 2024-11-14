import React from 'react';
import '../styles/topic.css';
import { Link } from 'react-router-dom';


const Topics = () => {
  const handleClick = (event) => {
    event.target.closest('.topic-item').classList.add('clicked');
    setTimeout(() => {
      event.target.closest('.topic-item').classList.remove('clicked');
    }, 500);
  };

  // Background image URLs for each topic item
  const topicImages = [
    'https://southwestshadow.com/wp-content/uploads/2022/04/Untitled-design-2.png',
    'https://www.firstuni.in/cms-api/file/CMS_file/author/12001DF2258149C9822C713FA29EE01C_1698053475525.jpg',
    'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CWM5omSsQVUpMREJwHQUzQ.jpeg',
    'https://www.followeraudit.com/blog/wp-content/uploads/2023/02/Web-Developer-skill.jpg',
    'https://www.findmyshift.it/M409Ai00iO08s0AH2J083H7075K4I4093Ms79P4N3KkE04K6LA05UbJ4008J5N8F0079',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lifewire.com%2Fwhat-is-reinforcement-learning-7508013&psig=AOvVaw3oiw4FPU2_l5CygpKFTvBw&ust=1731650464043000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPi0_eeS24kDFQAAAAAdAAAAABAZ', // New topic 1
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lifewire.com%2Fwhat-is-reinforcement-learning-7508013&psig=AOvVaw3oiw4FPU2_l5CygpKFTvBw&ust=1731650464043000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPi0_eeS24kDFQAAAAAdAAAAABAZ'  // New topic 2
  ];

  return (
    <section id="topics-section" className="topics">
      <h2>Choose Your Topic! 🌟</h2>
      <div className="topic-list">
        <div
          className="topic-item"
          onClick={handleClick}
          style={{ backgroundImage: `url(${topicImages[0]})` }}
        >
          <Link to="/academics">
            📚 Academics
          </Link>
        </div>
        <div
          className="topic-item"
          onClick={handleClick}
          style={{ backgroundImage: `url(${topicImages[1]})` }}
        >
          <Link to="/competitive-exams">
            🎓 Competitive Exams
          </Link>
        </div>
        <div
          className="topic-item"
          onClick={handleClick}
          style={{ backgroundImage: `url(${topicImages[2]})` }}
        >
          <Link to="/cp-dsa">
            🧩 CP/DSA
          </Link>
        </div>
        <div
          className="topic-item"
          onClick={handleClick}
          style={{ backgroundImage: `url(${topicImages[3]})` }}
        >
          <Link to="/development">
            💻 Development
          </Link>
        </div>
        <div
          className="topic-item"
          onClick={handleClick}
          style={{ backgroundImage: `url(${topicImages[4]})` }}
        >
          <Link to="/interview-placement">
            📝 Interview / Placement
          </Link>
        </div>
        <div
          className="topic-item"
          onClick={handleClick}
          style={{ backgroundImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lifewire.com%2Fwhat-is-reinforcement-learning-7508013&psig=AOvVaw3oiw4FPU2_l5CygpKFTvBw&ust=1731650464043000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPi0_eeS24kDFQAAAAAdAAAAABAZ' }}
        >
          <Link to="/new-topic2">
            🚀 Machine Learning
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topics;
