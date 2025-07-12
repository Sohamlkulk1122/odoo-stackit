import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// === App.js ===
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Chatbot from './components/Chatbot';
import LoginModal from './components/Auth/LoginModal';
import RegisterModal from './components/Auth/RegisterModal';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <Header setTheme={setTheme} theme={theme} setShowLogin={setShowLogin} setShowRegister={setShowRegister} user={user} />
      <Home user={user} />
      <Chatbot />
      {showLogin && <LoginModal setUser={setUser} setShow={setShowLogin} />}
      {showRegister && <RegisterModal setShow={setShowRegister} />}
    </Router>
  );
};

export default App;