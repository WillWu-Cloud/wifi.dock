import { useReducer, useEffect } from 'react'
import { useAwsIotDevice } from './AwsIoTDeviceProvider'

const ACTIONS = {
  AWS_CONNECTION: 'aws connection',
  MAKE_REQUEST: 'make-request',
  PUBLISH: 'publish',
  RECEIVE: 'receive',
  ERROR: 'error'
}

const INIT_STATE = {
  isAwsConnected: false,
  msgs: null,
  error: false
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.AWS_CONNECTION:
      return { ...state, isAwsConnected: action.payload.isAwsConnected }
    case ACTIONS.MAKE_REQUEST:
      return { ...state, loading: true }
    case ACTIONS.RECEIVE:     
      return { ...state, loading: false, msgs: action.payload.msgs }
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

    dispatch({ type: ACTIONS.MAKE_REQUEST })

    // console.log('[useAwsIot] isDeviceConnected: ' + isDeviceConnected);
    dispatch({ type: ACTIONS.AWS_CONNECTION, payload: {isAwsConnected: isDeviceConnected}})

    if( messages!=null && isDeviceConnected ){
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
        console.log('device.subscribe: '+ sub)
      }
    }
  }, [device, isDeviceConnected, sub])

  useEffect(() => {
    if(isDeviceConnected){
      // device.subscribe("$aws/things/"+device.thingName+"/shadow/get/accepted");
      if(pub != null && !pub.topic.includes('undefined')){
        console.log('pub.topic: '+ pub.topic)
        device.publish(pub.topic, pub.message);
      }
    }
  }, [device, isDeviceConnected, pub])

  return state
   
}



