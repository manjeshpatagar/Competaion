import React, { useEffect, useState } from 'react';
import './index.css';

const CampaningDetailsPage = () => {
    const deadline = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 1 month from now
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = deadline - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [deadline]);

    return (
        <div className="campaign-container">
            <div className="campaign-title">🎉 Campaign Details</div>

            <div className="campaign-card">
                <h2>📜 Campaign Rules</h2>
                <ul>
                    <li>✅ Participants must register before the deadline.</li>
                    <li>🧠 Only original content is allowed.</li>
                    <li>🚫 No spamming or fraudulent activity permitted.</li>
                    <li>📩 One entry per participant.</li>
                </ul>
            </div>

            <div className="campaign-deadline">
                <h2>⏳ Deadline Countdown</h2>
                <div className="countdown-box">
                    <p>
                        Ends in: <strong>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</strong>
                    </p>
                    <p>📅 Deadline Date: <strong>{deadline.toLocaleString()}</strong></p>
                </div>
            </div>

            <div className="campaign-rewards">
                <h2>🏆 Rewards</h2>
                <ul>
                    <li>🥇 1st Prize: ₹10,000 + Certificate</li>
                    <li>🥈 2nd Prize: ₹5,000 + Certificate</li>
                    <li>🥉 3rd Prize: ₹2,000 + Certificate</li>
                </ul>
            </div>

            <div className="campaign-banners">
                <h2>📣 Promotion Banners</h2>
                <div className="banners-grid">
                    <img src="https://via.placeholder.com/300x150?text=Banner+1" alt="Banner 1" />
                    <img src="https://via.placeholder.com/300x150?text=Banner+2" alt="Banner 2" />
                  
                </div>
            </div>
        </div>
    );
};

export default CampaningDetailsPage;
