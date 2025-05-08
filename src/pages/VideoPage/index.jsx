import React, { useState } from 'react';
import './index.css';

const users = [
  { rank: 1, name: "Pedro", score: 984, img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png", highlight: false },
  { rank: 2, name: "Andrew", score: 945, img: "https://cdn-icons-png.flaticon.com/128/219/219970.png", highlight: true },
  { rank: 3, name: "Freida", score: 897, img: "https://cdn-icons-png.flaticon.com/128/201/201634.png", highlight: false },
  { rank: 4, name: "Clinton", score: 863, img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png", highlight: false },
  { rank: 5, name: "Leif", score: 829, img: "https://cdn-icons-png.flaticon.com/128/6084/6084667.png", highlight: false },
  { rank: 6, name: "Jamel", score: 786, img: "https://cdn-icons-png.flaticon.com/128/6997/6997551.png", highlight: false },
  { rank: 7, name: "Tyra", score: 772, img: "https://cdn-icons-png.flaticon.com/128/6084/6084667.png", highlight: false },
  { rank: 8, name: "Theresa", score: 755, img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png", highlight: false },
  { rank: 9, name: "Sandra", score: 734, img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png", highlight: false },
  { rank: 10, name: "Mike", score: 710, img: "https://cdn-icons-png.flaticon.com/128/219/219970.png", highlight: false },
];

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
        {/* Video */}
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

        {/* Stats */}
        <div className="video-stats">
          <span>1.2K Views</span> · <span>243 Voted</span> · <span>13 Shared</span>
        </div>

        {/* Candidate Info */}
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

        {/* Title and Description */}
        <div className="video-header">
          <h2 className="video-title">Campaign Video: Priya Sharma</h2>
          <p className="video-description">
            Watch a single candidate’s campaign video. Let’s now add the proper icons you mentioned.
            Watch a single candidate’s campaign video. Let’s now add the proper icons you mentioned.
            Watch a single candidate’s campaign video. Let’s now add the proper icons you mentioned.
          </p>
        </div>

        {/* Buttons */}
        {isLoggedIn && (
          <div className="video-actions-vertical">
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

        {/* Leaderboard Section */}
        <div className="mainleaderboard-container">
          <div className="mainleaderboard-header">
            <h2 className="mainleaderboard-title">Scoreboard</h2>
          </div>
          <hr className="mainheader-line" />

          <div className="mainleaderboard-list-wrapper">
            <ul className="mainleaderboard-list">
              {users.map((user) => (
                <li
                  key={user.rank}
                  className={`mainleaderboard-item ${user.highlight ? "highlighted" : ""}`}
                >
                  <span className="mainrank">{user.rank}</span>
                  <img src={user.img} alt={user.name} className="mainavatar" />
                  <span className="mainname">{user.name}</span>
                  <span className="mainscore">{user.score}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mainnext-button">See more</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
