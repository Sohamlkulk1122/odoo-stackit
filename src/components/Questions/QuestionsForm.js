import React, { useState } from 'react';
import RichTextEditor from '../Editor/RichTextEditor';

const QuestionForm = ({ addQuestion }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <div>
      <h3>Ask a Question</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} />
      <RichTextEditor onSave={setDesc} />
      <button onClick={() => {
        addQuestion({ id: Date.now(), title, tags: tags.split(','), description: desc });
        setTitle('');
        setTags('');
      }}>Post</button>
    </div>
  );
};

export default QuestionForm;
