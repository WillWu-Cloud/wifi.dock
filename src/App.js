import './App.css';
import Amplify from 'aws-amplify';
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
import { SearchProvider } from './contexts/SearchProvider'
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import DevicePage from './components/DevicePage'; 
import MemberPage from './components/MemberPage'
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider, Hidden } 
from '@material-ui/core';

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
  }
})

const useStyles = makeStyles(theme => ({
  appMain: {
    paddingLeft: theme.spacing.unit * 0,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 11,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 9,
    },
    width: '100%'
  }
}))

function App(props) {
  const classes =  useStyles();

  return (
    <ThemeProvider theme={theme}>
    <AwsIoTDeviceProvider>
    <SearchProvider>
    <Router>
      <Hidden xsDown>
        <SideMenu />
      </Hidden>  
        <Navbar />
        <div className={classes.appMain}>
        <Switch>

          <Route exact path="/" render={(props) => (<DevicePage {...props} />)} />
          <Route exact path="/members" render={(props) => (<MemberPage {...props} />)} /> 
          
          {/* <Route exact path="/iot" render={(props) => (<MQTTDisplay {...props} />)} />
          <Route exact path="/S3" render={(props) => (<DevicesPage {...props} />)} /> */}

        </Switch>
        </div>
        <Footer />

      <CssBaseline />
    </Router>
    </SearchProvider>
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
