import React, { useState } from "react";

export const AddNote = ({ addNoteProp }) => {
  const [noteText, setNoteText] = useState("");

  const noteTextCount = 200;

  const handleChange = (e) => {
    if (noteTextCount - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleAddNote = () => {
    if (noteText.trim().length > 0) {
      addNoteProp(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="notelistMain2">
      <textarea
        value={noteText}
        onChange={handleChange}
        cols="8"
        rows="10"
        placeholder="Add new node"
      ></textarea>
      <div className="notelistMainFooter">
        <span>{noteTextCount - noteText.length} remaining</span>
        <button onClick={handleAddNote} className="save">
          Save
        </button>
      </div>
    </div>
  );
};
