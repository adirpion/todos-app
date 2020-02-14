import React from 'react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <h1>Todos App</h1>
        <AddNote />
        <NoteList />
      </div>
  );
}

export default App;
