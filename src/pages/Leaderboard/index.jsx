import React from "react";
import "./index.css";

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

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2 className="leaderboard-title">Scoreboard</h2>
      </div>
      <hr className="header-line" />

      <div className="leaderboard-list-wrapper">
        <ul className="leaderboard-list">
          {users.map((user) => (
            <li
              key={user.rank}
              className={`leaderboard-item ${user.highlight ? "highlighted" : ""}`}
            >
              <span className="rank">{user.rank}</span>
              <img src={user.img} alt={user.name} className="avatar" />
              <span className="name">{user.name}</span>
              <span className="score">{user.score}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="next-button">Next</button>
    </div>
  );
};

export default Leaderboard;
