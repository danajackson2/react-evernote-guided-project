import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.selected_note.title}</h2>
      <p>{props.selected_note.body}</p>
      <button onClick={() => props.changeView('edit')} >Edit</button>
    </Fragment>
  )
}

export default NoteViewer
