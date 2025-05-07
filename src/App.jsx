import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import VideoPage from './pages/VideoPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;