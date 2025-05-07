import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import VideoUplodePage from './pages/VideoUplodePage';
import VoterRegisterPage from './pages/VoterRegisterPage';
import VotingSuccessPage from './pages/VotingSuccessPage';
import CandidteProfilePage from './pages/CandidteProfilePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/videouplode" element={<VideoUplodePage />} />
        <Route path="/voterregister" element={<VoterRegisterPage />} />
        <Route path="/votingsuccess" element={<VotingSuccessPage />} />
        <Route path="/candidteprofile" element={<CandidteProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;