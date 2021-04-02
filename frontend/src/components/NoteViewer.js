import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  const {title, body, id, created_at, updated_at} = props.selected_note

  const createdTime = (timeStamp) => {
    let a = timeStamp.split('-')
    return `Created: ${a[1]}-${a[2].slice(0, 2)}-${a[0]}`
  }

  const updatedTime = (timeStamp) => {
    let a = timeStamp.split('-')
    return `Edited: ${a[1]}-${a[2].slice(0, 2)}-${a[0]}`
  }

  return (
    <Fragment>
      <h2>{title}</h2>
      <h4>{createdTime(created_at)}</h4>
      <h4>{updatedTime(updated_at)}</h4>
      <p>{body}</p>
      <button onClick={() => props.changeView('edit')} >Edit</button>
      <button onClick={() => props.deleteNote(id)} >Delete</button>
    </Fragment>
  )
}

export default NoteViewer
