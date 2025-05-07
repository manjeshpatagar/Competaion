import React, { useState } from 'react';
import './index.css';

const VideoPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="video-view-container">
      <div className="video-view-card">

        {/* 1. Embedded YouTube Video */}
        <div className="video-player">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/X7WXHhokylc?rel=0"
            title="Campaign Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* 2. Stats */}
        <div className="video-stats">
          <span>1.2K Views</span> · <span>243 Voted</span> · <span>13 Shared</span>
        </div>

        {/* 3. Candidate Info */}
        <div className="video-author">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
            alt="Candidate"
            className="candidate-img"
          />
          <div className="author-info">
            <h4>Priya Sharma</h4>
            <p>@priyaforchange</p>
          </div>
        </div>

        {/* 4. Title and Description */}
        <div className="video-header">
          <h2 className="video-title">Campaign Video: Priya Sharma</h2>
          <p className="video-description">
            Watch a single candidate’s campaign video – glad it's working great! Let's now add the proper icons you mentioned.
             Watch a single candidate’s campaign video – glad it's working great! Let's now add the proper icons you mentioned. 
             Watch a single candidate’s campaign video – glad it's working great! Let's now add the proper icons you mentioned.
             Watch a single candidate’s campaign video – glad it's working great! Let's now add the proper icons you mentioned.
          </p>
        </div>

        {/* 5. Bottom Action Buttons */}
        {isLoggedIn && (
          <div className="video-actions">
            <button className="action-btn vote-btn">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5931/5931366.png"
                alt="Vote"
                className="icon"
              />
              Vote Now
            </button>

            <div className="share-dropdown-wrapper">
              <button className="action-btn share-btn" onClick={() => setShareOpen(!shareOpen)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2099/2099122.png"
                  alt="Share"
                  className="icon"
                />
                Share
              </button>
              {shareOpen && (
                <div className="share-dropdown">
                  <p className="share-url">{window.location.href}</p>
                  <button className="copy-btn" onClick={handleCopyLink}>Copy Link</button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default VideoPage;
