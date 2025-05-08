import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const allUsers = [
  { rank: 1, name: "Pedro", score: 3645, img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" },
  { rank: 2, name: "Andrew", score: 3496, img: "https://cdn-icons-png.flaticon.com/128/219/219970.png" },
  { rank: 3, name: "Freida", score: 3178, img: "https://cdn-icons-png.flaticon.com/128/201/201634.png" },
  { rank: 4, name: "Clinton", score: 2846, img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png" },
  { rank: 5, name: "Theresa", score: 2472, img: "https://cdn-icons-png.flaticon.com/128/6084/6084667.png" },
  { rank: 6, name: "Jamel", score: 2186, img: "https://cdn-icons-png.flaticon.com/128/6997/6997551.png" },
  { rank: 7, name: "Leif", score: 1956, img: "https://cdn-icons-png.flaticon.com/128/6084/6084667.png" },
  { rank: 8, name: "Sandra", score: 1732, img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png" },
  { rank: 9, name: "Mike", score: 1550, img: "https://cdn-icons-png.flaticon.com/128/219/219970.png" },
  { rank: 10, name: "Laura", score: 1440, img: "https://cdn-icons-png.flaticon.com/128/201/201634.png" },
  { rank: 11, name: "Brian", score: 1320, img: "https://cdn-icons-png.flaticon.com/128/6997/6997551.png" },
  { rank: 12, name: "Brian", score: 670, img: "https://cdn-icons-png.flaticon.com/128/6997/6997551.png" },
  { rank: 13, name: "Nina", score: 648, img: "https://cdn-icons-png.flaticon.com/128/6084/6084667.png" },
  { rank: 14, name: "Ravi", score: 625, img: "https://cdn-icons-png.flaticon.com/128/219/219970.png" },
  { rank: 15, name: "Ayesha", score: 610, img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png" },
  { rank: 16, name: "Santiago", score: 590, img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" },
  { rank: 17, name: "Maria", score: 576, img: "https://cdn-icons-png.flaticon.com/128/201/201634.png" },
  { rank: 18, name: "Liam", score: 560, img: "https://cdn-icons-png.flaticon.com/128/6997/6997551.png" },
];

const ITEMS_PER_LOAD = 15;

const CandidateScoreboard = () => {
  const [visibleUsers, setVisibleUsers] = useState(allUsers.slice(3, 3 + ITEMS_PER_LOAD));
  const listRef = useRef(null);

  const loadMore = () => {
    setVisibleUsers((prev) => {
      const nextUsers = allUsers.slice(3 + prev.length, 3 + prev.length + ITEMS_PER_LOAD);
      return [...prev, ...nextUsers];
    });
  };

  const handleScroll = () => {
    const wrapper = listRef.current;
    if (wrapper.scrollTop + wrapper.clientHeight >= wrapper.scrollHeight - 10) {
      loadMore();
    }
  };

  useEffect(() => {
    const wrapper = listRef.current;
    wrapper.addEventListener("scroll", handleScroll);
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, []);

  const top3 = allUsers.slice(0, 3);

  return (
    <div className="scoreboard-wrapper">
      <div className="top-section">
        <h2 className="scoreboard-title">Final Scoreboard</h2>
        <div className="podium">
          <div className="podium-item second">
            <img className="podium-avatar" src={top3[1].img} alt={top3[1].name} />
            <div className="podium-name">{top3[1].name}</div>
            <div className="podium-score">{top3[1].score.toLocaleString()} Pt</div>
            <div className="podium-block">2</div>
          </div>
          <div className="podium-item first">
            <img className="podium-avatar" src={top3[0].img} alt={top3[0].name} />
            <div className="podium-name">{top3[0].name}</div>
            <div className="podium-score">{top3[0].score.toLocaleString()} Pt</div>
            <div className="podium-block">1</div>
          </div>
          <div className="podium-item third">
            <img className="podium-avatar" src={top3[2].img} alt={top3[2].name} />
            <div className="podium-name">{top3[2].name}</div>
            <div className="podium-score">{top3[2].score.toLocaleString()} Pt</div>
            <div className="podium-block">3</div>
          </div>
        </div>
      </div>

      <div className="candidate-list" ref={listRef}>
        <ul>
          {visibleUsers.map((user) => (
            <li key={user.rank}>
              <img src={user.img} alt={user.name} />
              <span className="rank">{user.rank}</span>
              <span className="name">{user.name}</span>
              <span className="score">{user.score.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="footer-buttons">
        <button className="btn save">Save</button>
        <button className="btn share">Share</button>
      </div> */}
    </div>
  );
};

export default CandidateScoreboard;
