import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import SearchForm from '../components/SearchForm'
import Grid from '@material-ui/core/Grid';

export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      // const user = await Auth.currentAuthenticatedUser();
      // const result = await Auth.updateUserAttributes(user, {
      // 'custom:organization': '2b962ea2-d89f-4810-86ac-553993086c8b'
      // });
      // console.log(result);

      Auth.signOut();  
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      // <div className="card is-shady">
      <div className="card">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="logo.png" width="112" height="28" alt="logo" />
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <Link to="/" className="navbar-item">
              Dashboard
            </Link> */}
            {/* <Link to="/iot" className="navbar-item">
              AWS IoT
            </Link> */}
            {/* <Link to="/S3" className="navbar-item">
              AWS S3
            </Link> */}

          </div>
          <div className="navbar-item">
            <SearchForm />
          </div> 

          <div className="navbar-end">
            <div className="navbar-item">
              <AmplifySignOut />
            </div>
          </div>     
        </div>
      </nav>
      </div>
    )
  }
}
