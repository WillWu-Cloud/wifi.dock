import React, { useState, useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import AWSIoTData from 'aws-iot-device-sdk';
import awsmobile from '../aws-exports';
import AWSConfiguration from '../aws-iot-configuration.js';
import Pretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';
import AutosizeInput from 'react-input-autosize';
Amplify.configure(awsmobile);

/*
    Note - I attempted to use Amplify PubSub for IoT message handling but found that
    it lacked adequate functionality to handle multiple subscriptions easily. Therefore, 
    I opted to use aws-iot-devide-sdk which proved much easier to use. 
*/

//######################################################################################
function arrayRemove(arr, value) {
  // REMOVE SPECIFIC ITEM BY VALUE FROM AN ARRAY
  //https://love2dev.com/blog/javascript-remove-from-array/
  return arr.filter(function(ele){
      return ele !== value;
  });

}
//######################################################################################

function MQTTDisplay(props) {
  // ALLOW USER TO SUBSCRIBE TO MQTT TOPICS

  const [desiredSubscriptionTopic, setDesiredSubscriptionTopic] = useState("$aws/things/BEWP1-080027E90EDA/shadow/get/accepted");
  const [desiredPublishTopic,   setDesiredPublishTopic]   = useState("$aws/things/BEWP1-080027E90EDA/shadow/get");
  const [desiredPublishMessage, setDesiredPublishMessage] = useState(`{ "message": "Hello" }`);
  const [subscribedTopics, setSubscribedTopics] = useState([]);
  
  // isConnected and mqttClient strictly used for publishing;
  // Subscriptions are instead handled in child MQTTSubscription components
  const [isConnected, setIsConnected]   = useState(false);  
  const [mqttClient, setMqttClient]     = useState();

  useEffect(() => {
    
    connectToAwsIot();
    handleSubscriptionRequest(); 

  },[]);  // the empty [] ensures only run once


  async function connectToAwsIot() {
    // This connection/function is only for publishing messages;
    // Subscriptions each get their own child object with separate connections.

    // mqtt clients require a unique clientId; we generate one below
    var clientId = 'mqtt-explorer-' + (Math.floor((Math.random() * 100000) + 1));

    // console.log(`clientId: ${clientId}`)

    // get credentials and, from them, extract key, secret key, and session token
    // Amplify's auth functionality makes this easy for us...
    var currentCredentials = await Auth.currentCredentials();
    var essentialCredentials = Auth.essentialCredentials(currentCredentials);

    // console.log(`clientId: ${clientId}`)
    // console.log(`currentCredentials: ${currentCredentials}`)
    // console.log(`essentialCredentials: ${essentialCredentials}`)
    // console.log(`AWSConfiguration.host: ${AWSConfiguration.host}`)
    

    // Create an MQTT client
    var newMqttClient = AWSIoTData.device({
      region: AWSConfiguration.region,
      host:AWSConfiguration.host,
      clientId: clientId,
      protocol: 'wss',
      maximumReconnectTimeMs: 8000,
      debug: true,
      accessKeyId:  essentialCredentials.accessKeyId,
      secretKey:    essentialCredentials.secretAccessKey,
      sessionToken: essentialCredentials.sessionToken
    });

    // On connect, update status
    newMqttClient.on('connect', function() {
      setIsConnected(true);
      // console.log('Publisher connected to AWS IoT.');  
    });

    // update state to track mqtt client
    setMqttClient(newMqttClient);

  }

  function removeSubscription(topic) {
    // This function is passed to child components
    setSubscribedTopics(arrayRemove(subscribedTopics,topic));
  }

  function handleSubscriptionRequest(e) {
    // stop submit button from refreshing entire page
    if(e){
      e.preventDefault();
    }

    if (subscribedTopics.includes(desiredSubscriptionTopic)) {
      // console.log(`You are already subscribed to topic '${desiredSubscriptionTopic}'!`);
    }
    else {
      setSubscribedTopics(prevTopics => [...prevTopics, desiredSubscriptionTopic]);
      // console.log(`Subscribed to topic '${desiredSubscriptionTopic}'!`);
    }
  }

  function handlePublishRequest(e) {
    // stop submit button from refreshing entire page
    if(e) {
      e.preventDefault();
    }  
    if(mqttClient){
      mqttClient.publish(desiredPublishTopic, desiredPublishMessage);
    }
  
  }

    return (
      <div className="MQTTDisplay">
        <div className="thin-border">
          <b>Publisher status:</b> {isConnected ? "connected" : "Not connected"}
          <br/><br/> 
          <form onSubmit={handlePublishRequest}>
          <b>Publish to Topic:</b>
            <br/>
            <AutosizeInput
              value={desiredPublishTopic}
              onChange={e => setDesiredPublishTopic(e.target.value)}
              placeholder="IoT Topic"
              type="text"
              name="desiredPublishTopic"
              required
            />
            <br/><br/>
            <b>Publish Message:</b>
            <br/>
            <AutosizeInput
              value={desiredPublishMessage}
              onChange={e => setDesiredPublishMessage(e.target.value)}
              placeholder="IoT Topic"
              type="text"
              name="desiredPublishTopic"
              required
            />
            <br/><br/>
            <button type="submit">Publish</button>   
            <br/>
          </form>
        </div>
        <br/>
        <div className="thin-border">
          <form onSubmit={handleSubscriptionRequest}>
            <b>Subscribe to Topic:</b>
            <br/>
            <AutosizeInput
              value={desiredSubscriptionTopic}
              onChange={e => setDesiredSubscriptionTopic(e.target.value)}
              placeholder="IoT Topic"
              type="text"
              name="desiredSubscriptionTopic"
              required
            />
            <button type="submit">Subscribe</button>   
            <br/><br/>
          </form>
  
          <b>Subscriptions:</b> <br/>
          {subscribedTopics.map(topic => {
            return (<MQTTSubscription key={topic} topic={topic} removeSubscription={removeSubscription}/>)
          })}
        </div>
      </div>
    );
  }

//######################################################################################
function MQTTSubscription(props) {

  const [isConnected, setIsConnected] = useState(false);
  const [mqttClient, setMqttClient]   = useState();
  const [messages, setMessages]       = useState([]);
  var msgTitle = '';

  useEffect(() => {

    connectToAwsIot();

    return () => {
      // this gets called when component is destroyed...
      //https://github.com/mqttjs/MQTT.js/blob/master/README.md#end    
      // console.log(`Ended subscription to '${props.topic}'...`);
    };

  },[]); // the "[]" causes this to execute just once

  async function connectToAwsIot() {

    // mqtt clients require a unique clientId; we generate one below
    var clientId = 'mqtt-explorer-' + (Math.floor((Math.random() * 100000) + 1));

    // get credentials and, from them, extract key, secret key, and session token
    // Amplify's auth functionality makes this easy for us...
    var currentCredentials = await Auth.currentCredentials();
    var essentialCredentials = Auth.essentialCredentials(currentCredentials);
    
    // Create an MQTT client
    var newMqttClient = AWSIoTData.device({
      region: AWSConfiguration.region,
      host:AWSConfiguration.host,
      clientId: clientId,
      protocol: 'wss',
      maximumReconnectTimeMs: 8000,
      debug: true,
      accessKeyId:  essentialCredentials.accessKeyId,
      secretKey:    essentialCredentials.secretAccessKey,
      sessionToken: essentialCredentials.sessionToken
     });

    // On connect, update status
    newMqttClient.on('connect', function() {
      setIsConnected(true);
      newMqttClient.subscribe(props.topic);
      // console.log('Connected to AWS IoT!');
      // console.log(`Subscribed to ${props.topic}`);

      if(props.topic.includes("BEWP1-080027E90EDA")){
        newMqttClient.publish('$aws/things/BEWP1-080027E90EDA/shadow/get', '{}');
      }

    });

    // add event handler for received messages
    newMqttClient.on('message', function(topic, payload) {
      var myDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
      var newMessage =  `${myDate} - topic '${topic}'#${payload.toString()}`;
      // console.log('msgTitle', msgTitle);
      // var newMessage =  `${payload.toString()}`;
      setMessages(prevMessages => [newMessage, ...prevMessages ]);
    });

    // update state to track mqtt client

    setMqttClient(newMqttClient);
  }

  function handleUnsubscribe(e) {
    // stop submit button from refreshing entire page
    e.preventDefault();

    // end subscription; I think this could be added to the return() of the useEffect(), as an "onUnmount" handler,
    // but I received an erropr when I tried it. I might be doing something wrong but for now, it works with the commands
    // below... 
    mqttClient.end(false); 
    setIsConnected(false);

    // remove subscription from parent component, thus killing this component...
    props.removeSubscription(props.topic);
  }

  return (
    <div className="MQTTSubscription">
      Topic Filter: "{props.topic}" ({isConnected ? "connected" : "not connected"})
      <form onSubmit={handleUnsubscribe}>
        <button type="submit">Unsubscribe</button>
      </form>
      <br/><br/>

      {messages.map((message,index) => {
        return (
          <li key={index} className="markdown">
            {
              <>
                {message.split('#')[0]}
                <Pretty data={message.split('#')[1]} theme={JSONPrettyMon} /> 
              </> 
            }
          </li>
        );
      })}
    </div>
  );

}

export default MQTTDisplay;