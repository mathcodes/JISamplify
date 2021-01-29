import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// In this component we've used the `withAuthenticator` component. 
//     - Scaffolds out an entire user authentication flow 
//     - ALLOWS users to •sign up •sign in •reset their password
//     - Confirms sign in for multifactor authentication (MFA). 
// We've also used the AmplifySignOut component which will render a Sign Out button.

function App()
{
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator( App );
