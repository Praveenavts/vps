import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
import Templates from './components/Templates';
import Subscriptions from './components/Sub';
import Preview from './components/Preview';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/LoginPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <>
            <Header username={username} onLogout={handleLogout} />
            <Sidebar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (  
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
