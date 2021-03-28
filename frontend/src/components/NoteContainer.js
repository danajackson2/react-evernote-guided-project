import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    selected_note: null,
    show: 'instructions'
  }

  selectNote = (note) => {
    this.setState({selected_note: note, show: 'view'})
  }

  changeView = (input) => {
    this.setState({...this.state, show: `${input}`})
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar selectNote={this.selectNote} notes={this.props.notes}/>
          <Content changeView={this.changeView} show={this.state.show} selected_note={this.state.selected_note}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
