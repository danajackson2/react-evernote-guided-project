import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    title: this.props.selected_note.title,
    body: this.props.selected_note.body,
    id: this.props.selected_note.id
  }

  render() {
    return (
      <form onSubmit={e => this.props.editNote(e, this.state)} className="note-editor">
        <input onChange={(e) => this.setState({...this.state, title: e.target.value})} type="text" name="title" defaultValue={this.props.selected_note.title}/>
        <textarea onChange={(e) => this.setState({...this.state, body: e.target.value})} name="body" defaultValue={this.props.selected_note.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={() => this.props.changeView('view')} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
