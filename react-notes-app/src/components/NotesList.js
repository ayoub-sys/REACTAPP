import React from 'react'
import AddNote from './AddNote';
import Note from './Note'


const NotesList=({notes,handleAddNote,handleDeleteNote,handleSearchNote})=> {
  return (
    
    <div className='notes-list'>
       
        {notes.map((note)=> (<Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} handleSearchNote={handleSearchNote}  />))}

        <AddNote handleAddNote={handleAddNote}/>  
    </div>
    
  );
  
};
export default  NotesList;
