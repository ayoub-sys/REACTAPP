import React, {useState} from 'react';
import './App.css';

import Header from './Header.js';
import ContactList from './ContactList.js';
import AddContact from './AddContact';

function App() {
const [contacts,setContacts]= useState([]);
const addContactHandler= (contact)=>{
  console.log(contact);
};
 
  return ( 
    <div className="ui container"> 
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
