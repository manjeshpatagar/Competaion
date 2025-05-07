import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import VideoPage from './pages/VideoPage'


function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videopage" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;