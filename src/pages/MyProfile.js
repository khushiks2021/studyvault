import React, { useState } from 'react';
import './MyProfile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Khushi Kumari',
    institute: 'IIT Kanpur',
    department: 'MSE',
    email: 'khushiks21@iitk.ac.in',
    contact: '8287036237',
    profilePhoto: 'WhatsApp Image 2024-07-22 at 00.26.33.jpeg',
    downloadedResources: [
      { id: 1, name: 'Data Structures Notes', details: '2nd Year - 1st Sem - CSE' },
      { id: 2, name: 'Algorithm Design', details: '2nd Year - 1st Sem - CSE' }
    ],
    likedResources: [
      { id: 1, name: 'Machine Learning Guide', details: 'Comprehensive ML guide for beginners' },
      { id: 2, name: 'React Best Practices', details: 'Advanced React patterns and practices' }
    ],
    uploadedNotes: [
      { id: 1, name: 'Physics 101 Notes', details: 'Detailed notes on mechanics' },
      { id: 2, name: 'Mathematics Handbook', details: 'Quick reference guide for calculus' }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState(profileData);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setProfileData(editedProfileData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedProfileData(profileData);
    setIsEditing(false);
  };

  const handleDeleteDownloadedResource = (id) => {
    const updatedDownloadedResources = profileData.downloadedResources.filter(resource => resource.id !== id);
    setProfileData({ ...profileData, downloadedResources: updatedDownloadedResources });
  };

  const handleDeleteLikedResource = (id) => {
    const updatedLikedResources = profileData.likedResources.filter(resource => resource.id !== id);
    setProfileData({ ...profileData, likedResources: updatedLikedResources });
  };

  const handleDeleteUploadedNote = (id) => {
    const updatedUploadedNotes = profileData.uploadedNotes.filter(note => note.id !== id);
    setProfileData({ ...profileData, uploadedNotes: updatedUploadedNotes });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfileData({ ...editedProfileData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditedProfileData({ ...editedProfileData, profilePhoto: URL.createObjectURL(file) });
    }
  };

  const handlePasswordChange = () => {
    // Handle password update functionality here
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-header">
        <img
          src={profileData.profilePhoto}
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-info">
          {isEditing ? (
            <>
              <div className="form-group">
                <label><strong>Name:</strong></label>
                <input type="text" name="name" value={editedProfileData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label><strong>Institute:</strong></label>
                <input type="text" name="institute" value={editedProfileData.institute} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label><strong>Department:</strong></label>
                <input type="text" name="department" value={editedProfileData.department} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label><strong>Email:</strong></label>
                <input type="email" name="email" value={editedProfileData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label><strong>Contact:</strong></label>
                <input type="text" name="contact" value={editedProfileData.contact} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label><strong>Profile Photo:</strong></label>
                <input type="file" onChange={handlePhotoUpload} />
              </div>
              <button onClick={handleSaveProfile} className="save-profile-button">Save Profile</button>
              <button onClick={handleCancelEdit} className="cancel-edit-button">Cancel</button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Institute:</strong> {profileData.institute}</p>
              <p><strong>Department:</strong> {profileData.department}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>Contact:</strong> {profileData.contact}</p>
              <button onClick={handleEditProfile} className="edit-profile-button">Edit Profile</button>
            </>
          )}
        </div>
      </div>

     

      <div className="downloaded-resources-section">
        <h2>Downloaded Resources</h2>
        <ul>
          {profileData.downloadedResources.map(resource => (
            <li key={resource.id} className="downloaded-resource">
              <strong>{resource.name}</strong>: {resource.details}
              <button className="delete-resource-button" onClick={() => handleDeleteDownloadedResource(resource.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="liked-resources-section">
        <h2>Liked Resources</h2>
        <ul>
          {profileData.likedResources.map(resource => (
            <li key={resource.id} className="liked-resource">
              <strong>{resource.name}</strong>: {resource.details}
              <button className="delete-resource-button" onClick={() => handleDeleteLikedResource(resource.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="uploaded-notes-section">
        <h2>Notes I Uploaded</h2>
        <ul>
          {profileData.uploadedNotes.map(note => (
            <li key={note.id} className="uploaded-note">
              <strong>{note.name}</strong>: {note.details}
              <button className="delete-note-button" onClick={() => handleDeleteUploadedNote(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="update-password-section">
        <h2>Update Password</h2>
        <div className="form-group">
          <label><strong>New Password:</strong></label>
          <input type="password" name="newPassword" placeholder="Enter new password" />
        </div>
        <div className="form-group">
          <label><strong>Confirm Password:</strong></label>
          <input type="password" name="confirmPassword" placeholder="Confirm new password" />
        </div>
        <button onClick={handlePasswordChange} className="update-password-button">Update Password</button>
      </div>
    </div>
  );
};

export default Profile;
