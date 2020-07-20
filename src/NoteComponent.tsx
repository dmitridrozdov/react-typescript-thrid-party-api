import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector } from "react-redux";
import { NotesState } from "./notesReducer";

export const NoteComponent: React.FC = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  return (
    <>
      <NewNoteInput addNote={alert} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
};
