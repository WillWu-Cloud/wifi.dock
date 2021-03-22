import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import SearchForm from '../components/SearchForm'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Navbar = () =>  {
  const classes = useStyles();
  const handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();  
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className={classes.root}>
      <Box
        component={Grid}
        container
        boxShadow={3}
        // spacing={3}
        // style={{ padding: 10 }}
      >
      <Grid container justify="space-between" alignItems="center">
          <Grid item xs={2}>
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="logo.png" width="112" height="28" alt="logo" />
              </Link>
            </div>            
          </Grid>

          <Grid item xs={4}>
            <SearchForm />
          </Grid>

          <Grid item xs={2}>
          <AmplifySignOut />
          </Grid>

      </Grid> 
      </Box>
    </div>
  )

}

export default Navbar

      // // <div className="card is-shady">
      // <div className="card">
      // <nav className="navbar" role="navigation" aria-label="main navigation">
      //   <div className="navbar-brand">
      //     <Link className="navbar-item" to="/">
      //       <img src="logo.png" width="112" height="28" alt="logo" />
      //     </Link>
      //   </div>

      //   <div id="navbarBasicExample" className="navbar-menu">
      //     <div className="navbar-start">
      //       {/* <Link to="/" className="navbar-item">
      //         Dashboard
      //       </Link> */}
      //       {/* <Link to="/iot" className="navbar-item">
      //         AWS IoT
      //       </Link> */}
      //       {/* <Link to="/S3" className="navbar-item">
      //         AWS S3
      //       </Link> */}

      //     </div>
      //     <div className="navbar-item">
      //       <SearchForm />
      //     </div> 

      //     <div className="navbar-end">
      //       <div className="navbar-item">
      //         <AmplifySignOut />
      //       </div>
      //     </div>     
      //   </div>
      // </nav>
      // </div>