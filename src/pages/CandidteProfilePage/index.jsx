import React, { useState } from "react";
import "./index.css";
import { Share2, BarChart2 } from "react-feather";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

const CandidteProfilePage = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className="candidateprofile-container">
      {/* Header */}
      <div className="candidateprofile-header">
        <div style={{ display: "flex", alignItems:"center" }}>
          <div className="candidateprofile-logo">Q</div>
          <div className="candidateprofile-title">Profile</div>
        </div>

        <div className="candidateprofile-icons">
          <div>
            <Share2 onClick={handleShareClick} />
          </div>
          <div>
            <BarChart2 />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="candidateprofile-video">
        <video controls width="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Profile Info */}
      <div className="candidateprofile-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4139/4139981.png"
            alt="avatar"
            className="candidateprofile-avatar"
          />
          <div className="candidateprofile-text">
            <h4>Andrew Ainsley</h4>
            <div>@andrew_ainsley</div>
          </div>
        </div>
        <div><button className="candidateprofile-editbtn">Edit Profile</button></div>
        
      </div>

      {/* Share Modal */}
      {showShareOptions && (
  <div
    className="candidateprofile-overlay"
    onClick={() => setShowShareOptions(false)}
  >
    <div
      className="candidateprofile-sharemodal"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <p>Share</p>
      <div className="candidateprofile-share-icons">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(videoUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook /> Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(videoUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram /> Telegram
        </a>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CandidteProfilePage;
