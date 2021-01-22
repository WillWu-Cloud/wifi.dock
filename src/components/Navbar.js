import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="logo.png" width="112" height="28" alt="logo" />
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Dashboard
            </Link>
            <Link to="/iot" className="navbar-item">
              AWS IoT
            </Link>
            <Link to="/s3" className="navbar-item">
              AWS S3
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <AmplifySignOut />
            </div>
          </div>
          
        </div>


      </nav>
    )
  }
}
