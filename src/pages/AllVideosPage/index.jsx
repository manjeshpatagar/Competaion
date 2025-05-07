import React, { useRef, useEffect } from "react";
import "./index.css";

const AllVideosPage = () => {
    const videoRefs = useRef([]);

    const videos = [
        {
            id: 1,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            uploaderName: "Andrew Ainsley",
            uploaderUsername: "@andrew_ainsley",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
        },
        {
            id: 2,
            videoUrl: "https://www.w3schools.com/html/movie.mp4",
            uploaderName: "Jessica Ray",
            uploaderUsername: "@jessray",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
        },
        {
            id: 1,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            uploaderName: "Andrew Ainsley",
            uploaderUsername: "@andrew_ainsley",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
        },
        {
            id: 2,
            videoUrl: "https://www.w3schools.com/html/movie.mp4",
            uploaderName: "Jessica Ray",
            uploaderUsername: "@jessray",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
        },
        {
            id: 1,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            uploaderName: "Andrew Ainsley",
            uploaderUsername: "@andrew_ainsley",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
        },
        {
            id: 2,
            videoUrl: "https://www.w3schools.com/html/movie.mp4",
            uploaderName: "Jessica Ray",
            uploaderUsername: "@jessray",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
        },
        {
            id: 1,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            uploaderName: "Andrew Ainsley",
            uploaderUsername: "@andrew_ainsley",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
        },
        {
            id: 2,
            videoUrl: "https://www.w3schools.com/html/movie.mp4",
            uploaderName: "Jessica Ray",
            uploaderUsername: "@jessray",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
        }, {
            id: 1,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            uploaderName: "Andrew Ainsley",
            uploaderUsername: "@andrew_ainsley",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
        },
        {
            id: 2,
            videoUrl: "https://www.w3schools.com/html/movie.mp4",
            uploaderName: "Jessica Ray",
            uploaderUsername: "@jessray",
            uploaderAvatar: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
        },
        
    ];

    useEffect(() => {
        // Pause all videos when component unmounts
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
            <div className="candidateprofile-section-title">All Uploaded Videos</div>
            <div className="candidateprofile-video-grid">
                {videos.map((video, index) => (
                    <div key={index} className="candidateprofile-video-card">
                        <video
                            controls
                            width="100%"
                            ref={(el) => (videoRefs.current[index] = el)}
                            onPlay={() => handlePlay(index)}
                        >
                            <source src={video.videoUrl} type="video/mp4" />
                        </video>
                        <div className="candidateprofile-uploader">
                            <img
                                src={video.uploaderAvatar}
                                alt="avatar"
                                className="candidateprofile-avatar-small"
                            />
                            <div>
                                <strong>{video.uploaderName}</strong>
                                <div className="candidateprofile-username">
                                    {video.uploaderUsername}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllVideosPage;
