import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    title: this.props.selected_note.title,
    body: this.props.selected_note.body,
    id: this.props.selected_note.id
  }

  editNote = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${this.state.id}`,{
      method: 'PATCH',  
      headers: {
        'content-type':'application/json',
        'Accept': 'application/json'},
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        user_id: 1})
    })
    .then(res => res.json())
    .then(console.log)
    this.props.changeView('view')
  }

  render() {
    return (
      <form onSubmit={e => this.editNote(e)} className="note-editor">
        <input onChange={(e) => this.setState({...this.state, title: e.target.value})} type="text" name="title" defaultValue={this.props.selected_note.title}/>
        <textarea onChange={(e) => this.setState({...this.state, body: e.target.value})} name="body" defaultValue={this.props.selected_note.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
