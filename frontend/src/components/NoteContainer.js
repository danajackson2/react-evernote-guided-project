import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    selected_note: null,
    show: 'instructions',
    user_id: 1,
    notes: [],
    filter_term: ''
  }

  componentDidMount(){
    this.loadNotes()
  }

  loadNotes = () => {
    return fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(data => this.setState({notes: data}))
  }

  newNote = () => {
    fetch('http://localhost:3000/api/v1/notes',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: 'Title Here',
        body: 'Note Here',
        user_id: `${this.state.user_id}`
      })
    })
    .then(res => res.json())
    .then(newNote => {
      const notes = [...this.state.notes, newNote]
    this.setState({notes})
    })
  }

  editNote = (e, noteData) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${noteData.id}`,{
      method: 'PATCH',  
      headers: {
        'content-type':'application/json',
        'Accept': 'application/json'},
      body: JSON.stringify({
        title: noteData.title,
        body: noteData.body,
        user_id: 1})
    })
    .then(res => res.json())
    .then(note => {
      this.selectNote(note)
      this.loadNotes()
    })
    this.changeView('view')
  }

  selectNote = (note) => {
    this.setState({selected_note: note, show: 'view'})
  }

  changeView = (input) => {
    this.setState({...this.state, show: `${input}`})
  }

  setFilter = input => {
    this.setState({filter_term: `${input}`})
  }

  notesList = () => {
    return this.state.filter_term === '' 
    ? this.state.notes 
    : this.state.notes.filter(note => note.title.includes(this.state.filter_term))
  }

  render() {
    return (
      <Fragment>
        <Search setFilter={this.setFilter} />
        <div className='container'>
          <Sidebar newNote={this.newNote} selectNote={this.selectNote} notes={this.notesList()}/>
          <Content editNote={this.editNote} selectNote={this.selectNote} changeView={this.changeView} show={this.state.show} selected_note={this.state.selected_note}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
