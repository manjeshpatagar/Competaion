import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import VideoPage from './pages/VideoPage';
import VoterRegisterPage from './pages/VoterRegisterPage';
import VotingSuccessPage from './pages/VotingSuccessPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/voterregister" element={<VoterRegisterPage />} />
        <Route path="/votingsuccess" element={<VotingSuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;