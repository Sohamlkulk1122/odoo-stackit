import React, { useState } from 'react';

const RegisterModal = ({ setShow }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email || !username || password.length < 6) {
      alert('Fill valid details. Password must be at least 6 characters.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
      alert('Email already exists');
      return;
    }
    const newUser = { email, username, password, role: 'user' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully. Please login.');
    setShow(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Register</h3>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleRegister}>Register</button>
        <button onClick={() => setShow(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default RegisterModal;
