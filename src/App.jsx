import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import VideoPage from './pages/VideoPage';
import VoterRegisterPage from './pages/VoterRegisterPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/voterregister" element={<VoterRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;