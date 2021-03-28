import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => <NoteItem changeToShow={props.changeToShow} selectNote={props.selectNote} note={note}/>)}
    </ul>
  );
}

export default NoteList;
