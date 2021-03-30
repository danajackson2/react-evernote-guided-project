import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  const {title, body, id} = props.selected_note

  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={() => props.changeView('edit')} >Edit</button>
      <button onClick={() => props.deleteNote(id)} >Delete</button>
    </Fragment>
  )
}

export default NoteViewer
