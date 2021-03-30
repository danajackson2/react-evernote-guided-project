import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.length > 0 && props.notes.map(note => <NoteItem key={note.id} changeToShow={props.changeToShow} selectNote={props.selectNote} note={note}/>)}
    </ul>
  );
}

export default NoteList;
