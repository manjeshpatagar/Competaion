import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import VideoUplodePage from './pages/VideoUplodePage';
import VoterRegisterPage from './pages/VoterRegisterPage';
import VotingSuccessPage from './pages/VotingSuccessPage';
import CandidteProfilePage from './pages/CandidteProfilePage';
import AllVideosPage from './pages/AllVideosPage';
import CampaningDetailsPage from './pages/CampaningDetailsPage';
import Map from './pages/MapPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/videouplode" element={<VideoUplodePage />} />
        <Route path="/voterregister" element={<VoterRegisterPage />} />
        <Route path="/votingsuccess" element={<VotingSuccessPage />} />
        <Route path="/candidteprofile" element={<CandidteProfilePage />} />
        <Route path="/allvideos" element={<AllVideosPage />} />
        <Route path="/campaningdetails" element={<CampaningDetailsPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
} 

export default App;