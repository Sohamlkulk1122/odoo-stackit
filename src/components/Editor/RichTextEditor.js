import React, { useState } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw
} from 'draft-js';
import 'draft-js/dist/Draft.css';

const RichTextEditor = ({ onSave }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) setEditorState(newState);
  };

  const applyStyle = style => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const saveContent = () => {
    const raw = convertToRaw(editorState.getCurrentContent());
    onSave(JSON.stringify(raw));
  };

  return (
    <div className="editor-box">
      <div className="toolbar">
        <button onClick={() => applyStyle('BOLD')}>Bold</button>
        <button onClick={() => applyStyle('ITALIC')}>Italic</button>
        <button onClick={() => applyStyle('UNDERLINE')}>Underline</button>
      </div>
      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
      <button onClick={saveContent}>Save</button>
    </div>
  );
};

export default RichTextEditor;
