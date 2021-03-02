import { useReducer, useEffect } from 'react'
import awsmobile from '../aws-exports';
import { useAwsIotDevice } from './AwsIoTDeviceProvider'

const ACTIONS = {
  PUBLISH: 'publish',
  RECEIVE: 'receive',
  ERROR: 'error'
}

const INIT_STATE = {
  msgs: null,
  error: false
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.RECEIVE:     
      return { ...state, loading: false, msgs: action.payload.msgs}
    case ACTIONS.ERROR:  
      return { ...state, loading: true }
    default:
      return state
  }
}

export default function useAwsIot (pub, sub) {

  const [state, dispatch] = useReducer(reducer, INIT_STATE) 
  const { device, isDeviceConnected, messages } = useAwsIotDevice()

  useEffect(() => {
    if( messages!=null && isDeviceConnected){
      dispatch({ type: ACTIONS.RECEIVE, payload: {msgs: messages}})
    }
    if(!isDeviceConnected){
      dispatch({ type: ACTIONS.ERROR })
    }
  }, [device, isDeviceConnected, messages])

  useEffect(() => {
    if(isDeviceConnected){
      // device.subscribe("$aws/things/"+device.thingName+"/shadow/get/accepted");
      if(sub != null){

        device.subscribe("$aws/things/"+sub+"/shadow/get/accepted")
        device.subscribe("$aws/things/"+sub+"/shadow/update/accepted")
        // console.log('device.subscribe: '+ sub)
      }
    }
  }, [device, isDeviceConnected, sub])

  useEffect(() => {
    if(isDeviceConnected){
      // device.subscribe("$aws/things/"+device.thingName+"/shadow/get/accepted");
      if(pub != null){
        console.log('pub.topic: '+ pub.topic)
        console.log('pub.topic: '+ pub.topic)
        device.publish(pub.topic, pub.message);
      }
    }
  }, [device, isDeviceConnected, pub])

  return state
   
}



