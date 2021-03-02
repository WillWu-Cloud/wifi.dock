import React from 'react';
import Device from './Device';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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

const allDevices = [
  {
    thingName: 'BEWP1-080027E90EDA'
  },
  {
    thingName: 'BEWP1-080027ADABBE'
  }, 
  // {
  //   thingName: 'BEWP1-080027E90EDA'
  // },    
]

let deviceList = [], i,
    devices = [];
for (i = 0; i < allDevices.length; i++) {
    deviceList.push(allDevices[i]);
    if ( deviceList.length % 2 === 0 ) {
      devices.push(deviceList);
      deviceList = [];
    }
}
if(deviceList.length > 0) {
  devices.push(deviceList);
  deviceList = [];
}
// console.log(devices[0]);
// console.log(devices[1]);
// console.log(devices[2]);

export default function DevicesContent() {
  const classes = useStyles();
    return (
      
      <section className="container">
        <div className={classes.root}>
        {
          devices.map((deviceCols, index) => (
            <div className="columns features" key={index} >
              {deviceCols.map((device, index) => (
                <Device key={index} device={device} />
              ))}
            </div>
          ))
        }
          <Fab 
            size="small" 
            color="default" 
            aria-label="add"
            className={classes.fab}
          >
            <AddIcon />
          </Fab>
        </div>

      </section>

    )
}


