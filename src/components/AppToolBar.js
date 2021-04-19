import React, { Component, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import SearchForm from './SearchForm'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import Popper from '@material-ui/core/Popper';
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import Popover from "@material-ui/core/Popover";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import { GridOn } from '@material-ui/icons';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    position: 'fixed',
    width: '100%',
    backgroundColor: '#fff',
  },
  brand: {
    height: 28,
    width: 112,
    marginLeft: theme.spacing(1),
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
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const AppToolBar = () =>  {

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
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
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

  const open = Boolean(anchorEl);
  const popperId = open ? 'account-popper' : undefined;

  return (
    <AppBar id="app-bar" className={classes.root}>
    <Toolbar>
      <Grid container justify="space-between" alignItems="center" spacing={1}>
          <Grid item xs={2}>
              <img src="logo.png" width="112" height="28" alt="logo" />
          </Grid>
          <Grid item sm />
          <Grid item xs={5}>
            <SearchForm />
          </Grid>
          <Grid item sm />
          <Grid item >
            <IconButton onClick={handleClick} >
              <Avatar aria-label="recipe" 
                      className={classes.avatar}
                      fontSize='large'
                      aria-controls="mouse-over-popover"
                      aria-haspopup="true">                
                {authName ? authName[0].toUpperCase() : ""}
              </Avatar>
            </IconButton>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Grid container direction='column' wrap="nowrap" alignItems="center">
              <Grid item style={{marginTop:'8px'}}>
                <Avatar fontSize='large'>{authName ? authName[0].toUpperCase() : ''}</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth style={{marginBottom:'8px'}}>
                <ListItemText align="center" primary={authName ? authName[0].toUpperCase() + authName.slice(1) : '' } secondary={authEmail ? authEmail : '' } />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs zeroMinWidth style={{marginTop:'8px'}}>
                <AmplifySignOut />
              </Grid>
            </Grid>
          </Popover>
        </Grid>
      </Grid> 
    </Toolbar>
    </AppBar>
  )

}

export default AppToolBar

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