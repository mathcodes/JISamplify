import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { listNotes } from './graphql/queries';
// import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { API, Storage } from 'aws-amplify';
import Dashboard from '../src/pages/Dashboard'

const initialFormState = { name: '', description: '' }

function App()
{
  const [notes, setNotes] = useState( [] );
  const [formData, setFormData] = useState( initialFormState );

  // useEffect( () =>
  // {
  //   fetchNotes();
  // }, [] );

  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   setNotes(apiData.data.listNotes.items);
  // }

  // Update the fetchNotes function to fetch an image if there is an image associated with a note

  // In the main App function, create a new onChange function to handle the image upload
  // async function onChange( e )
  // {
  //   if ( !e.target.files[0] ) return
  //   const file = e.target.files[0];
  //   setFormData( { ...formData, image: file.name } );
  //   await Storage.put( file.name, file );
  //   fetchNotes();
  // }

  return (
    <div className="App">
     <Dashboard />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator( App );