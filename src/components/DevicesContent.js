import React from 'react'
// { useState, useEffect, useCallback } 

// import { Auth } from 'aws-amplify';
import Device from './Device';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import axios from 'axios'
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSearch } from '../contexts/SearchProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    margin: 4,
    bottom: 4,
    right: 12,
    marginRight: theme.spacing(12),
    position: 'absolute',
    size: 'large'
  },
  
}));



// const handleFabAdd = async event => {
//   event.preventDefault();
  // try {
  //   let orgRole = {
  //     org : 'ORG#2b962ea2-d89f-4810-86ac-553993086c8b',
  //     role: 'admin'
  //   }
  //   const user = await Auth.currentAuthenticatedUser();
  //   const result = await Auth.updateUserAttributes(user, {
  //   'custom:role': JSON.stringify(orgRole)
  //   });
  //   console.log(result);

  //   // Auth.signOut();  
  // } catch (error) {
  //   console.log(error.message);
  // }
// }

export default function DevicesContent() {

  // const [devices, setDevices] = useState([]);
  // const [orgId, setOrgId] = useState();

  // const handleFabAdd = async event => {
  //   getDevices(orgId);
  // }

  // const getDevices = useCallback(async (org_id) => {
  //   try {
  //     const params = {
  //       "pk": org_id 
  //     }
  //     const res = await axios.post(`${process.env.REACT_APP_WIFI_DOCK_API_INVOKE_URL}/devices`, params);
        
  //     let deviceList = [], i, deviceRow = [];

  //     for (i = 0; i < res.data.length; i++) {
  //       deviceList.push(res.data[i]);
  //       if ( deviceList.length % 2 === 0 ) {
  //         deviceRow.push(deviceList);
  //         deviceList = [];
  //       }
  //     }
  //     if(deviceList.length > 0) {
  //       deviceRow.push(deviceList);
  //       deviceList = [];
  //     }  
  //     setDevices(deviceRow);
  //   } catch (error) {
      
  //   }
  // }, [])

  // async function readAwsAuthAttributes() {
  //   try {
  //     const currentUserInfo = await Auth.currentUserInfo();
  //     const attrRole = currentUserInfo.attributes['custom:role'];
  //     const orgRole = JSON.parse(attrRole);
  //     setOrgId(orgRole.org);
  //     getDevices(orgRole.org);
  //     // fetchDevices(orgRole.org);
  //   } catch (err) {
  //     console.log('error fetching user info: ', err);
  //   }
  // }
  
  // const fetchDevices = async (org) => {
  //   // add call to AWS API Gateway to fetch devices
  //   try {
  //     const params = {
  //       "pk": org 
  //     }
  //     const res = await axios.post(`${process.env.REACT_APP_WIFI_DOCK_API_INVOKE_URL}/devices`, params);
        
  //     let deviceList = [], i, deviceRow = [];

  //     for (i = 0; i < res.data.length; i++) {
  //       deviceList.push(res.data[i]);
  //       if ( deviceList.length % 2 === 0 ) {
  //         deviceRow.push(deviceList);
  //         deviceList = [];
  //       }
  //     }
  //     if(deviceList.length > 0) {
  //       deviceRow.push(deviceList);
  //       deviceList = [];
  //     }
  //     console.log('devices -1: '+JSON.stringify(devices));  
  //     setDevices(deviceRow);
  //     console.log('devices -2: '+JSON.stringify(devices));
  //   } catch (error) {
      
  //   }
  // }

  // useEffect(() => {
  //   readAwsAuthAttributes()
  // }, []) 

  const allDevices = [
    {
      name: 'A WiFi Dock',
      thing_name: 'BEWP1-080027E90EDA'
    },
    {
      name: 'B WiFi Dock',
      thing_name: 'BEWP1-080027ADABBE'
    },    
  ]

  let deviceList = [], i;
  let devices = [];
  let filteredDevices = [];
  const { searchText } = useSearch();

  filteredDevices = allDevices.filter((device) => {
    return device.name.toLowerCase().includes(searchText.toLowerCase()) 
  })

for (i = 0; i < filteredDevices.length; i++) {
    deviceList.push(filteredDevices[i]);
    if ( deviceList.length % 2 === 0 ) {
      devices.push(deviceList);
      deviceList = [];
    }
}
if(deviceList.length > 0) {
  devices.push(deviceList);
  deviceList = [];
}

  const classes = useStyles();
  return (
    <section className="container">
      <div className={classes.root}>
      { 
        devices.length > 0 &&
        devices.map((deviceCols, index) => (
        <div className="columns features" key={index} >
        {deviceCols.map((device, index) => (
          <Device key={index} device={device} />
        ))}
        </div>
        ))
      }
      {
        !devices.length &&
        <>
          <LinearProgress />
          {/* <h1>Loading</h1> */}
        </> 
      }
        <Fab 
          size="small" 
          color="default" 
          aria-label="add"
          className={classes.fab}
          // onClick={handleFabAdd}
        >
          <AddIcon />
        </Fab>
      </div>
    </section>
  )
}


