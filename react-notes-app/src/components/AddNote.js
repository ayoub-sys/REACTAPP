import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {

    const CharacterLimit=200;
    const [notetext,setNoteText]=useState('');
    const handleChange=(event)=>{

        if(CharacterLimit-event.target.value.length >= 0){
            setNoteText(event.target.value);}
        }
    const handleSaveClick=()=>{

        if(notetext.trim().length>0){
        handleAddNote(notetext);
        setNoteText('');
        }
    }

    
  return (
    <div className='note new'>
    
    <textarea rows='8'
        cols='10'
        placeholder='type to add a note ... '
        value={notetext}
        onChange={handleChange}
        >

        
    </textarea>
    <div className='note-footer'>
        <small>{ CharacterLimit-notetext.length} Remaining</small>
        <button className='save' onClick={handleSaveClick }>Save</button>
    </div>
    
    
    </div>
  )
}

export default AddNote