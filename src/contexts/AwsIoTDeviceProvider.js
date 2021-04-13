import React, { useContext, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import AWSIoTData from 'aws-iot-device-sdk';
import AWSConfiguration from '../aws-iot-configuration.js';

const AwsIoTDeviceContext = React.createContext()

export function useAwsIotDevice() {
    return useContext(AwsIoTDeviceContext)
}

export function AwsIoTDeviceProvider({ children }) {
    const [device, setDevice]   = useState();
    const [isDeviceConnected, setIsDeviceConnected] = useState(false);
    const [messages, setMessages] = useState();
  
    useEffect(() => {
      connectToAwsIot()
      // console.log('connectToAwsIot()');
      return () => { 
        setIsDeviceConnected(false);
        // console.log('Ended AwsIoTDeviceProvider');
      };
    }, [])
  
    async function connectToAwsIot() {
      // This connection/function is only for publishing messages;
      // Subscriptions each get their own child object with separate connections.
  
      // mqtt clients require a unique clientId; we generate one below
      var clientId = 'mqtt-explorer-' + (Math.floor((Math.random() * 100000) + 1));
  
      // console.log(`clientId: ${clientId}`)
  
      // get credentials and, from them, extract key, secret key, and session token
      // Amplify's auth functionality makes this easy for us...
      try {
        var currentCredentials = await Auth.currentCredentials();
        // console.log('currentCredentials: '+currentCredentials);
        var essentialCredentials = Auth.essentialCredentials(currentCredentials);

              // var currentUserInfo = await Auth.currentUserInfo();
      // console.log('Auth.currentUserInfo : '+ currentUserInfo.attributes.email);
      // console.log('Auth.currentUserInfo : '+ currentUserInfo.attributes.name);

      // console.log(`clientId: ${clientId}`)
      // console.log(`currentCredentials: ${currentCredentials}`)
      // console.log(`essentialCredentials: ${essentialCredentials}`)
      // console.log(`AWSConfiguration.host: ${AWSConfiguration.host}`)
 
      // Create an MQTT client
      if(essentialCredentials){
        var device = AWSIoTData.device({
          region: AWSConfiguration.region,
          host:AWSConfiguration.host,
          clientId: clientId,
          protocol: 'wss',
          maximumReconnectTimeMs: 8000,
          debug: false,
          accessKeyId:  essentialCredentials.accessKeyId,
          secretKey:    essentialCredentials.secretAccessKey,
          sessionToken: essentialCredentials.sessionToken
        });
    
        // On connect, update status
        device.on('connect', function() {
          setIsDeviceConnected(true);
          // console.log('device.on - connected to AWS IoT.');  
        });
  
        // add event handler for received messages
        device.on('message', function(topic, payload) {
          // var mDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
          // var newMessage =  `${myDate} - topic '${topic}'#${payload}`;
          var newMessage = {
            topic: `${topic}`,
            msg: `${payload}`
          };
          // console.log('msgTitle', `${topic}`);
          // console.log('payload', `${payload}`);
          // var newMessage =  `${payload.toString()}`;
          // setMessages(prevMessages => [newMessage, ...prevMessages]);
          setMessages(newMessage);
          // console.log('newMessage: '+newMessage);
        });
    
        // update state to track mqtt client
        setDevice(device);
        }


      } catch (error) {
        console.log('error: '+error);
      }
    
    }

    const value = {
      device,
      isDeviceConnected,
      messages
    }

    return (
      <AwsIoTDeviceContext.Provider value={value}>
          {children}
      </AwsIoTDeviceContext.Provider>
    )
}

