import './App.css';
import { useEffect, useState } from 'react'
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from "aws-amplify-react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

import Bootstrap from "./theme";
import config from "./aws-exports";
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect, 
  useHistory }
  from 'react-router-dom';

import { AwsIoTDeviceProvider } from './contexts/AwsIoTDeviceProvider'
import { GlobalStateProvider } from './contexts/GlobalStateProvider'
import AppToolBar from './components/AppToolBar';
import SideMenu from './components/SideMenu';
import DevicePage from './components/DevicePage'; 
import MemberPage from './components/MemberPage'
import SchedulePage from './components/Schedule/SchedulePage'
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider, Hidden } 
from '@material-ui/core';
import LogIn from './components/auth/LogIn';

library.add(faEdit);
Amplify.configure(config);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default: 'white'
      // default: '#f4f5fd'
    },
  },
  shape:{
    borderRadius:'12px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    // MuiIconButton:{
    //   disableRipple:true
    // }
  },
  AppBar: {
    backgroundColor: '#fff',
    position: "fixed" 
  }
})

const useStyles = makeStyles(theme => ({
  appMain: {
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(11),
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(9),
    },
    width: '100%',
    overflow: 'hidden'
  }
}))

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const classes =  useStyles();
  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      })
  }
  useEffect(() => {
    assessLoggedInState();
  }, [])

  return (
    <ThemeProvider theme={theme}>
    <AwsIoTDeviceProvider>
    <GlobalStateProvider>
    <Router>
      <Hidden xsDown>
        <SideMenu />
      </Hidden>  

        <AppToolBar />
   
        <div className={classes.appMain}>
        <Switch>
          <Route exact path="/" render={(props) => (<DevicePage {...props} />)} />
          <Route exact path="/schedule" render={(props) => (<SchedulePage {...props} />)} /> 
          <Route exact path="/members" render={(props) => (<MemberPage {...props} />)} /> 
        </Switch>
        </div>
        <Footer />
      <CssBaseline /> 

    </Router>
    </GlobalStateProvider>
    </AwsIoTDeviceProvider>
    </ThemeProvider>
  )

}

export default withAuthenticator(App, {
  theme: Bootstrap,
  usernameAttributes: 'email',
  signUpConfig: {
     hiddenDefaults: ["phone_number"],
     signUpFields: [{ key: 'name', label: 'Name',required: true }]
}
}, true);

// export default withAuthenticator(App);

// export default App;

// {
//   loggedIn ? <LogIn /> :
//   (
//     <>
//     <Hidden xsDown>
//     <SideMenu />
//     </Hidden>  

//     <AppToolBar />

//     <div className={classes.appMain}>
//     <Switch>

//       <Route exact path="/" render={(props) => (<DevicePage {...props} />)} />
//       <Route exact path="/members" render={(props) => (<MemberPage {...props} />)} /> 
      
//       {/* <Route exact path="/iot" render={(props) => (<MQTTDisplay {...props} />)} />
//       <Route exact path="/S3" render={(props) => (<DevicesPage {...props} />)} /> */}

//     </Switch>
//     </div>
//     <Footer />

//    <CssBaseline />
//    </>
//   )
// }
