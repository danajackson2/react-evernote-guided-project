import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {
  state = {
    user_id: null,
    notes: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(data => this.setState({...this.state, notes: data}))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
