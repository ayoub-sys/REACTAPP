import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";

function App() {


  const [notes,setNotes]=useState(

    [{
      id:nanoid(),
      text:'this is  my first note!',
      date:'25/5/2022'
    },

    {
      id:nanoid(),
      text:'this is  my second note!',
      date:'2/5/2022'
    },
    {
      id:nanoid(),
      text:'this is  my third note!',
      date:'20/5/2022'
    },

    {
      id:nanoid(),
      text:'this is  my fourth note!',
      date:'20/5/2022'
    },
  
  
  
  ] );



  const [searchText, setSearchText] =useState('');

  const [darkMode,setDarkMode]=useState(false);


  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  },[notes]);

  useEffect(()=>{
    const saveNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (saveNotes){
      setNotes(saveNotes);
    }
  },[notes]);

const deleteNote =(id)=>{
  const newNotes=notes.filter((note)=>note.id !==id);
  setNotes(newNotes);



};




  const addNote=(text)=>{
      const date=new Date();
      const newNote={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
      };
      const newNotes=[...notes,newNote];
      setNotes(newNotes);
  }

  
  return (
   <div className={ `${darkMode && 'dark-mode'}`}>
      <div className="container">
          <Header handleDarkMode={setDarkMode}/>
          <Search handleSearchNote={setSearchText}/>
          <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
        
        </div>

   </div>
  );
}

export default App;
