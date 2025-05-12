import React, { useRef, useState } from "react";
import "./index.css";

const VideoUpload = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile || !title || !description) {
      alert("Please select a video and fill in all fields.");
      return;
    }

    // You can add actual upload logic here
    alert("✅ Video uploaded successfully!");
    
    // Reset form
    setSelectedFile(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="video-upload-container">
      <h2 className="upload-heading">Add New Video</h2>

      <div className="upload-box" onClick={handleBoxClick}>
        {selectedFile ? (
          <video
            width="100%"
            height="100%"
            controls
            className="video-preview"
          >
            <source src={URL.createObjectURL(selectedFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/512/656/656444.png"
              alt="Upload Icon"
              className="upload-icon-image"
            />
            <p className="upload-text">Add Video</p>
          </>
        )}
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Title</label>
        <textarea
          placeholder="Enter video title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-input description-input"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Description</label>
        <textarea
          placeholder="Enter video description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-input description-input"
        />
      </div>

      <button className="upload-button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default VideoUpload;
