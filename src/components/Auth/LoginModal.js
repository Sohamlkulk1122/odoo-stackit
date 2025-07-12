import React, { useState } from 'react';

const LoginModal = ({ setUser, setShow }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const match = users.find(u => u.email === email && u.password === password);
    if (match) {
      localStorage.setItem('user', JSON.stringify(match));
      setUser(match);
      setShow(false);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Login</h3>
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => setShow(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;
