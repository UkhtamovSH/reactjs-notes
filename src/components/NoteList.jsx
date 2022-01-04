import React from "react";
import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NoteList = ({ notes, addNoteProp, deleteNote }) => {
  return (
    <div className="notelist">
      {notes?.map((note, index) => {
        const { id, text, date } = note;
        return (
          <Note
            id={id}
            text={text}
            date={date}
            key={index}
            deleteNote={deleteNote}
          />
        );
      })}
      <AddNote addNoteProp={addNoteProp} />
    </div>
  );
};
