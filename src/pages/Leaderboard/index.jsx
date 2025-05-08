import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const allUsers = [
  { rank: 1, name: "Pedro", score: 984, img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" },
  { rank: 2, name: "Andrew", score: 945, img: "https://cdn-icons-png.flaticon.com/128/219/219970.png" },
  { rank: 3, name: "Freida", score: 897, img: "https://cdn-icons-png.flaticon.com/128/201/201634.png" },
  { rank: 4, name: "Clinton", score: 863, img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png" },
  { rank: 5, name: "Leif", score: 829, img: "https://cdn-icons-png.flaticon.com/128/6084/6084667.png" },
  { rank: 6, name: "Jamel", score: 786, img: "https://cdn-icons-png.flaticon.com/128/6997/6997551.png" },
  { rank: 7, name: "Tyra", score: 772, img: "https://cdn-icons-png.flaticon.com/128/6084/6084667.png" },
  { rank: 8, name: "Theresa", score: 755, img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" },
  { rank: 9, name: "Sandra", score: 734, img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png" },
  { rank: 10, name: "Mike", score: 710, img: "https://cdn-icons-png.flaticon.com/128/219/219970.png" },
  { rank: 11, name: "Laura", score: 690, img: "https://cdn-icons-png.flaticon.com/128/201/201634.png" },
  { rank: 12, name: "Brian", score: 670, img: "https://cdn-icons-png.flaticon.com/128/6997/6997551.png" },
  { rank: 13, name: "Nina", score: 648, img: "https://cdn-icons-png.flaticon.com/128/6084/6084667.png" },
  { rank: 14, name: "Ravi", score: 625, img: "https://cdn-icons-png.flaticon.com/128/219/219970.png" },
  { rank: 15, name: "Ayesha", score: 610, img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png" },
  { rank: 16, name: "Santiago", score: 590, img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" },
  { rank: 17, name: "Maria", score: 576, img: "https://cdn-icons-png.flaticon.com/128/201/201634.png" },
  { rank: 18, name: "Liam", score: 560, img: "https://cdn-icons-png.flaticon.com/128/6997/6997551.png" },
];

const ITEMS_PER_LOAD = 18;

const Leaderboard = () => {
  const [visibleUsers, setVisibleUsers] = useState(allUsers.slice(0, ITEMS_PER_LOAD));
  const [selectedRank, setSelectedRank] = useState(null);
  const listRef = useRef(null);

  const loadMore = () => {
    setVisibleUsers((prev) => {
      const nextUsers = allUsers.slice(prev.length, prev.length + ITEMS_PER_LOAD);
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

  const handleClick = (rank) => {
    setSelectedRank(rank);
  };

  const hasMoreUsers = visibleUsers.length < allUsers.length;

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2 className="leaderboard-title">Scoreboard</h2>
      </div>
      <hr className="header-line" />

      <div className="leaderboard-list-wrapper" ref={listRef}>
        <ul className="leaderboard-list">
          {visibleUsers.map((user) => (
            <li
              key={user.rank}
              onClick={() => handleClick(user.rank)}
              className={`leaderboard-item ${selectedRank === user.rank ? "highlighted" : ""}`}
            >
              <span className="rank">{user.rank}</span>
              <img src={user.img} alt={user.name} className="avatar" />
              <span className="name">{user.name}</span>
              <span className="score">{user.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
