import React, { useState, useEffect } from 'react'
import useAwsIot from '../contexts/useAwsIot';
import Chip from '@material-ui/core/Chip';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Badge from "@material-ui/core/Badge";
// import WifiIcon from '@material-ui/icons/Wifi';
import SignalWifi2BarIcon from '@material-ui/icons/SignalWifi2Bar';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';
import SettingsIcon from '@material-ui/icons/Settings';

import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 430,
    overflow: 'hidden'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  grid: {
    flexGrow: 1,
    maxWidth: 360,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  divider: {
    // Theme Color, or use css color in quote
    background: theme.palette.divider,
    height: 2,
    // backgroundColor: 'black',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
  customBadge: {
    backgroundColor: "#00AFD7",
    color: "white"
  },
  typography: {
    flexGrow: 1,
        align: "center"
      }
}));

function isJsonString( jsonString ) {
  try {
      JSON.parse( jsonString );
      return true; 
  } catch (e) {
    console.log('isJsonString -catch:' + e)
      return false; 
  }
}

export default function Device({ device }) {
  const [sub, setSub] = useState()
  const [pub, setPub] = useState()
  const { isAwsConnected, msgs, loading, error } = useAwsIot(pub, sub) 
  const [thing, setThing] = useState();
  const [connected, setConnected] = useState();
  const [fwver, setFwver] = useState();
  const [power, setPower] = useState();
  const [energy, setEnergy] = useState();
  const [current, setCurrent] = useState();
  const [start_time, setStart_time] = useState();
  const [charge, setCharge] = useState();
  const [chargeBtn, setChargeBtn] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  useEffect(() => {   
    if( isAwsConnected &&
        device.thing_name !== undefined) {

      setSub(device.thing_name);
      if( thing === undefined 
          || thing != device.thing_name ){
        setTimeout(() => {
          setPub({ 
            topic:'$aws/things/'+device.thing_name+'/shadow/get',
            message :'{}'
          });
        }, 1000);
      }

    }

  },[device, isAwsConnected, thing]);

  useEffect(() => {
    if( msgs!=null && 
        isJsonString(msgs.msg) 
    ){
      if( msgs.topic.includes(device.thing_name)){
        let msg = JSON.parse(msgs.msg);
        if( msg.state.reported != null){

          setThing(msg.state.reported.thing);
          setConnected(msg.state.reported.connected);
          setFwver(msg.state.reported.fwver);
          setPower(msg.state.reported.power);
          setEnergy(msg.state.reported.energy);
          setCurrent(msg.state.reported.current);
          setStart_time(msg.state.reported.start_time);

          if(msg.state.reported.charge === 'started'){
            setChargeBtn(true)
          }else if(msg.state.reported.charge === 'end'){
            setChargeBtn(false)
          }
          setCharge(msg.state.reported.charge);
        }
      }        
    }

  }, [msgs, device]);

  const handleChargeBtn = () => {
    // console.log('handleChargeBtn click!');
    if(typeof device.thing_name != "undefined" ){
      if( chargeBtn ){ 
        setPub({ 
          topic:'$aws/things/'+device.thing_name+'/shadow/update',
          message :'{"state":{"desired":{"charge":"end"}}}'
        });
      }else{
        setPub({ 
          topic:'$aws/things/'+device.thing_name+'/shadow/update',
          message :'{"state":{"desired":{"charge":"started"}}}'
        });  
      }
    }
  }

  const classes = useStyles();
  return (
    <div className="column is-4">
      {loading && <LinearProgress />}
      {error && <h1>Error. Try Refreshing.</h1>}
      {
        
        <Card className={classes.root} variant="outlined">
        <CardHeader
          avatar={  
            connected === 'true' ?   
            <Avatar aria-label="recipe" className={classes.avatar}>
              <SignalWifi2BarIcon />
            </Avatar>
            :
            <Badge color="secondary" variant="dot"> 
              <Avatar aria-label="recipe" className={classes.avatar}>
                <SignalWifi4BarIcon />
              </Avatar>
            </Badge> 
          }
          title={
            <div>
              <span>
                  {device.name}
              </span>
            </div>
          }
          subheader={device.thing_name}
          action={
            <div> 
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
            </div>
          }
        />
      {!loading &&
      <>
      <Box paddingX={2}>
        <Chip
          variant="outlined"
          size="small"
          label= { charge === 'started' ? "Started" : "Stop" }
          color= { charge === 'started' ? "primary" : "default" }
          onClick={handleChargeBtn}
          />
      </Box>
        <br/>  
        <Box paddingX={4}>
        <div className={classes.grid} >
          <Grid container spacing={1}>
           <Grid item xs={4}>
            <ListItemText align="center" primary={power} secondary="Power" />
           </Grid>
           <Grid item xs={4}>
            <ListItemText align="center" primary={energy} secondary="Energy" />
           </Grid>
           <Grid item xs={4}>
            <ListItemText align="center" primary={current} secondary="Current" />
           </Grid>
           <Grid item xs={12} zeroMinWidth >
            <Divider variant="middle" className={classes.divider} />
           </Grid>
           <Grid item xs={4} zeroMinWidth>
            <ListItemText align="center" primary={
              <>{start_time ?  start_time.split(' ')[1] : null }
                <br/><Typography variant='body2' style={{display: 'inline'}}>
                  {start_time? start_time.split(' ')[0] : null}</Typography>
              </>}
             secondary="Start Time" />
           </Grid> 
           <Grid item xs={6} />
          </Grid>
        </div>
        </Box>

        <br/>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <SettingsIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <ListItemText primary={fwver} secondary="fwver" />
          </CardContent>
        </Collapse>
       </> 
       } 
       </Card>
    }
    </div>
  )
}
