import React from 'react';

const QuestionList = ({ questions, vote }) => {
  return (
    <div>
      {questions.map(q => (
        <div key={q.id} className="card">
          <h3>{q.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: q.description }}></p>
          <div>Tags: {q.tags.join(', ')}</div>
          <div>
            <button onClick={() => vote(q.id, 1)}>⬆️</button>
            <button onClick={() => vote(q.id, -1)}>⬇️</button>
            <span>Votes: {q.votes || 0}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
