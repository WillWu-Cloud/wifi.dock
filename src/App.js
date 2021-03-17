import './App.css';
import Amplify from 'aws-amplify';
import {  withAuthenticator } from "aws-amplify-react";
import { AmplifySignOut } from "@aws-amplify/ui-react";

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
import Home from './components/Home'; 
import MQTTDisplay from './components/MQTTDisplay';
import DevicesPage from './components/DevicesPage';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit);

Amplify.configure(config);

function App(props) {

  return (
    <AwsIoTDeviceProvider>
    <SearchProvider>
    <Router>
    <div className="App">
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => (<Home {...props} />)} />
          {/* <Route exact path="/iot" render={(props) => (<MQTTDisplay {...props} />)} />
          <Route exact path="/S3" render={(props) => (<DevicesPage {...props} />)} /> */}
        </Switch>
        <Footer />
      </div>
    </div>
  </Router>
  </SearchProvider>
  </AwsIoTDeviceProvider>
  );
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
