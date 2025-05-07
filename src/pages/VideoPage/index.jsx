import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';






const VideoPage = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };
    return (
        <div className="video-page-container">
            <div className="video-form-content">
                <div style={{display:"flex", marginBottom:"20px", gap:"30px"}}>
                    <div className="video-back-icon" onClick={handleBack}>⬅️</div>

                    <div className="video-form-heading">Add New Video</div>
                </div>

                <div className="video-upload-box">
                    <label htmlFor="video-upload" className="video-upload-label">
                        <div className="video-upload-placeholder">
                            <span>📹</span>
                            <p>Add Video</p>
                        </div>
                    </label>
                    <input type="file" id="video-upload" accept="video/*" hidden />
                </div>

                <input
                    type="text"
                    className="video-input-title"
                    placeholder="Enter a Video Title"
                />

                <textarea
                    className="video-input-description"
                    placeholder="Enter a Description"
                    rows={4}
                ></textarea>
            </div>

            <button className="video-create-button">Upload</button>
        </div>
    );
};

export default VideoPage;
