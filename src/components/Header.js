import React from 'react';

const Header = ({ theme, setTheme, setShowLogin, setShowRegister, user }) => {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header>
      <h2>StackIt</h2>
      <div className="right">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
        {!user ? (
          <>
            <button onClick={() => setShowLogin(true)}>Login</button>
            <button onClick={() => setShowRegister(true)}>Register</button>
          </>
        ) : (
          <span>Hello, {user.username}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
