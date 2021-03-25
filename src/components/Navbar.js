import React, { Component, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import SearchForm from '../components/SearchForm'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import { GridOn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    height: 140,
    width: 100,
  },
  largeIcon: {
    '& svg': {
      fontSize: 30
    }
  },
  rootAccount: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  divider: {
    width: "30ch" ,
    // height: '184px',
    // marginLeft: '20px',
    // marginRight: '20px',

  },
}));

const Navbar = () =>  {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [authName, setAuthName] = React.useState();
  const [authEmail, setAuthEmail] = React.useState();

  useEffect(() => {
    loadAwsAuthAttributes();

  }, []) 

  async function loadAwsAuthAttributes() {
    try {
      const currentUserInfo = await Auth.currentUserInfo();
      setAuthName(currentUserInfo.attributes['name']);
      setAuthEmail(currentUserInfo.attributes['email']);
      // console.log('authName: '+authName);
  
    } catch (err) {
      console.log('error fetching user info: ', err);
    }
  }
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <Grid item xs={false}>
            <IconButton >
              <AppsIcon/>
            </IconButton>  
            <IconButton onClick={handleClick}>
              {/* <AccountCircleIcon
                // className={classes.root}
                fontSize='large'
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              /> */}
              <Avatar aria-label="recipe" 
                      className={classes.avatar}
                      fontSize='large'
                      aria-controls="simple-menu"
                      aria-haspopup="true">                
                {authName ? authName[0].toUpperCase() : ""}
              </Avatar>
            </IconButton>
              <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >     
              <Grid container direction='column' wrap="nowrap" alignItems="center" spacing={1}>
                <Grid item>
                  <Avatar fontSize='large'>{authName ? authName[0].toUpperCase() : ''}</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <ListItemText align="center" primary={authName ? authName[0].toUpperCase() + authName.slice(1) : '' } secondary={authEmail ? authEmail : '' } />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Divider className={classes.divider} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <AmplifySignOut />
                </Grid>
              </Grid>
            </Menu>
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