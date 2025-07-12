import React, { useState, useEffect } from 'react';
import QuestionForm from '../components/Questions/QuestionForm';
import QuestionList from '../components/Questions/QuestionList';

const Home = ({ user }) => {
  const [questions, setQuestions] = useState([]);

  // Load questions from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('questions')) || [];
    setQuestions(saved);
  }, []);

  // Add a new question
  const addQuestion = (newQ) => {
    const updated = [...questions, { ...newQ, votes: 0 }];
    setQuestions(updated);
    localStorage.setItem('questions', JSON.stringify(updated));
  };

  // Vote system
  const vote = (id, delta) => {
    const updated = questions.map(q => q.id === id ? { ...q, votes: (q.votes || 0) + delta } : q);
    setQuestions(updated);
    localStorage.setItem('questions', JSON.stringify(updated));
  };

  // Protect route if not logged in
  if (!user) return <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Please login to view and ask questions.</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Welcome, {user.username}</h2>
      <QuestionForm addQuestion={addQuestion} />
      <hr style={{ margin: '2rem 0' }} />
      <QuestionList questions={questions} vote={vote} />
    </div>
  );
};

export default Home;
