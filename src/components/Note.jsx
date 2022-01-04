import React from "react";
import { MdDeleteForever } from "react-icons/md";

export const Note = ({ id, text, date, deleteNote }) => {
  return (
    <div className="notelistMain">
      <span>{text}</span>
      <div className="notelistMainFooter">
        <span>{date}</span>
        <MdDeleteForever
          onClick={() => deleteNote(id)}
          className="delete-icon"
          size="1.3em"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};
