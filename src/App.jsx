import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import VideoPage from './pages/VideoPage'
import Leaderboard from './pages/Leaderboard';
import Candidatescoreboard from './pages/Candidatescoreboard'
import AboutUs from './pages/AboutUS'
import Videoupload from './pages/Videoupload'

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videopage" element={<VideoPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/candidatescoreboard" element={<Candidatescoreboard />} />
        <Route path="/videoupload" element={<Videoupload />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;