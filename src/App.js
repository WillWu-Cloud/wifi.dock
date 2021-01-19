import './App.css';
import Amplify from 'aws-amplify';
import {  withAuthenticator } from "aws-amplify-react";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import Bootstrap from "./theme";
import config from "./aws-exports";

import MQTTDisplay from './MQTTDisplay';
import DevicesPage from './components/DevicesPage';

Amplify.configure(config);

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
          iTunes
          <AmplifySignOut />
      </header>
      <br/>
      <DevicesPage {...props} />
      <br/>
      <header className="App-header">
          IOT 
      </header>
      <br/>
      <MQTTDisplay {...props} />
    </div>
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
