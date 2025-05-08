// AllVideosPage.jsx
import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const AllVideosPage = () => {
  const navigate = useNavigate();
  const videoRefs = useRef([]);
  const [search, setSearch] = useState("");

  const videos = [
    {
      id: 1,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      uploaderName: "Andrew Ainsley",
      uploaderUsername: "@andrew_ainsley",
      uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
      duration: "2:30",
      lat: 14.426,
      lng: 74.400,
    },
    {
      id: 2,
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      uploaderName: "Jessica Ray",
      uploaderUsername: "@jessray",
      uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
      duration: "1:15",
      lat: 14.430,
      lng: 74.402,
    },
    {
      id: 3,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      uploaderName: "Alex Johnson",
      uploaderUsername: "@alexjohn",
      uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      duration: "3:10",
      lat: 14.432,
      lng: 74.410,
    },
    {
      id: 4,
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      uploaderName: "Emily Stone",
      uploaderUsername: "@emilystone",
      uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/168/168734.png",
      duration: "1:45",
      lat: 14.428,
      lng: 74.398,
    },
  ];

  const filteredVideos = videos.filter((v) =>
    v.uploaderName.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <div className="candidateprofile-allvideos-container">
      <div className="candidateprofile-section-title">All Videos</div>
      <div style={{ padding: "0px 18px" }}>
        <input
          type="text"
          className="candidateprofile-search"
          placeholder="Search by uploader name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="candidateprofile-video-grid">
        {filteredVideos.map((video, index) => (
          <div key={video.id} className="candidateprofile-video-card">
            <div className="candidateprofile-video-wrapper">
              <video
                controls
                ref={(el) => (videoRefs.current[index] = el)}
                onPlay={() => handlePlay(index)}
              >
                <source src={video.videoUrl} type="video/mp4" />
              </video>
              <div className="candidateprofile-video-duration">{video.duration}</div>
            </div>

            <div className="candidateprofile-uploader">
              <img
                src={video.uploaderAvatar}
                alt="avatar"
                className="candidateprofile-avatar-small"
              />
              <div>
                <strong>{video.uploaderName}</strong>
                <div className="candidateprofile-username">{video.uploaderUsername}</div>
              </div>
            </div>

            <div className="candidateprofile-actions">
              <span
                onClick={() => navigate("/voterregister")}
                style={{ marginLeft: "10px", fontSize: "18px", cursor: "pointer" }}
              >
                ❤️ Like
              </span>
              <span
                onClick={() => navigate("/map", { state: { videos: filteredVideos } })}
                style={{ marginLeft: "10px", fontSize: "18px", cursor: "pointer" }}
              >
                🗺️ Map
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVideosPage;
