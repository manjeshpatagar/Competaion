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
    const profileShareUrl = "https://example.com/andrew_ainsley"; // Replace with actual profile URL

    const handleShareClick = () => {
        setShowShareOptions(!showShareOptions);
    };

    return (
        <div className="candidateprofile-container">
            {/* Header */}
            <div className="candidateprofile-header">
                <div style={{ display: "flex", alignItems: "center" }}>
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
                <div>
                    <button className="candidateprofile-editbtn">Edit Profile</button>
                </div>
            </div>

            {/* Additional Profile Details (Optional) */}
            <div className="candidateprofile-bio">
                <p><strong>Bio:</strong> Passionate community leader working towards change.</p>
                <p><strong>Location:</strong> Kumta, Karnataka</p>
                <p><strong>Email:</strong> andrew@example.com</p>
            </div>

            {/* Share Modal */}
            {showShareOptions && (
                <div
                    className="candidateprofile-overlay"
                    onClick={() => setShowShareOptions(false)}
                >
                    <div
                        className="candidateprofile-sharemodal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p style={{ textAlign: "center", fontSize: "20px" }}>Share</p>
                        <div className="candidateprofile-share-icons">
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(profileShareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileShareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook /> Facebook
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(profileShareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter /> Twitter
                            </a>
                            <a
                                href={`https://t.me/share/url?url=${encodeURIComponent(profileShareUrl)}`}
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
