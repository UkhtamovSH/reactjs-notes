import React, { useState } from "react";
import { NoteList } from "./components/NoteList";
import { nanoid } from "nanoid";

export const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Text 1",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "Text 2",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "Text 3",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "Text 4",
      date: "15/04/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);

    setNotes(newNotes);
  };

  return (
    <div className="container__row">
      <NoteList notes={notes} addNoteProp={addNote} deleteNote={deleteNote} />
    </div>
  );
};
