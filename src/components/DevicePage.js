import React, { useState, useEffect, useCallback }  from 'react'
import { Auth } from 'aws-amplify';
import Device from './Device';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSearch } from '../contexts/SearchProvider'
import { Typography } from '@material-ui/core';
import PageHeader from './PageHeader';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    margin: 4,
    bottom: 4,
    right: 4,
    marginRight: theme.spacing(2),
    position: 'absolute',
    size: 'large'
  },
  searchResult:{
    position: 'absolute',
    top: '50%',
    left: "50%",
    marginTop: "25px",
    marginLeft: "-100px",
    // width: "100px",
    // height: "400px",
  }
  
}));

// const handleFabAdd = async event => {
//   event.preventDefault();
//   try {
//     let orgRole = {
//       org : 'ORG#2b962ea2-d89f-4810-86ac-553993086c8b',
//       role: 'admin'
//     }
//     const user = await Auth.currentAuthenticatedUser();
//     const result = await Auth.updateUserAttributes(user, {
//     'custom:role': JSON.stringify(orgRole)
//     });
//     console.log(result);

//     // Auth.signOut();  
//   } catch (error) {
//     console.log(error.message);
//   }
// }

export default function DevicePage() {

// const [fetchedDevices, setFetchedDevices] = useState([]);
const [orgId, setOrgId] = useState();
const rowOfColumns = 3
let filteredDevices = [];

// const getDevices = useCallback(async (org_id) => {
//   try {
//     const params = {
//       "pk": org_id 
//     }
//     const res = await axios.post(`${process.env.REACT_APP_WIFI_DOCK_API_INVOKE_URL}/devices`, params);
//     setFetchedDDevices(res.data);

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
  //     setFetchedDDevices(deviceRow);
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
const { searchText } = useSearch();
// filteredDevices = fetchedDevices.filter((device) => {
//   return device.name.toLowerCase().includes(searchText.toLowerCase()) 
// })

filteredDevices = allDevices.filter((device) => {
  return device.name.toLowerCase().includes(searchText.toLowerCase()) 
})

for (i = 0; i < filteredDevices.length; i++) {
    deviceList.push(filteredDevices[i]);
    if ( deviceList.length % rowOfColumns === 0 ) {
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
    <>
    {/* <section className="container"> */}
      <div className={classes.root}>
      <PageHeader 
          title="Bizlink"
          subTitle=""
          icon={<DashboardOutlinedIcon fontSize="default"/>}
          qty={`${filteredDevices.length}`}
          unit="device" />
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
          {
            searchText ? 
              <Typography variant="h6" className={classes.searchResult}>No devices found</Typography> 
              : <LinearProgress />
          }
          
          {/* <h1>Loading</h1> */}
        </> 
      }
      </div>
    {/* </section> */}
    </>
  )
}


