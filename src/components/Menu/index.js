import React from "react";
import "./style.css";
import '../../App.css';
import Dashboard from "../../pages/Dashboard2"
// import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { listNotes } from './graphql/queries';
// import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const navLinks = [
  { url: '/about-us', name: 'About Us' },
  { url: '/projects', name: 'Projects' },
  { url: '/services', name: 'Services' },
  { url: '/contact-us', name: 'Contact Us' },
];

class Menu extends React.Component {  
  constructor(){
    super();
    this.state = {
      style:"menu",
      menuStatus:"open"
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    switch(this.state.menuStatus)
    {
      case "open":
        this.setState({
          menuStatus:"close",
          style:"menu active"
        });
        break;
      case "close":
        this.setState({
          menuStatus:"open",
          style:"menu"
        });
        break;
    }        
  }

  render() {
    return (      
      <div>
        <button onClick={this.handleClick}>menu</button>
        <div className={this.state.style}>               
          <ul>
            {navLinks.map(({ url, name }) => (
              <li><button key={name}>
                <a href={url}>{name}</a>
              </button></li>
             
             
            ))} <br/>
          </ul> 
        </div>
      </div>
    );
  }
}

 
  export default withAuthenticator(Menu);
