import React, { useEffect }  from 'react'
import { makeStyles, Typography, Grid, List, ListItem, Box} from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import TodayIcon from '@material-ui/icons/Today';

import WrappedButton from '../components/controls/WrappedButton'
import { withRouter } from "react-router-dom";

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { useGlobalState } from '../contexts/GlobalStateProvider'

// withStyles & makeStyles
const useStyles = makeStyles(theme => ({
	sideMenu: {
		display: 'flex',
		flexDirectin: 'column',
		// position: 'absolute',
    position: 'fixed',
		top: '70px',
		left: '0px',
		width: theme.spacing(9),
		height: '100%',
    	backgroundColor:
      	theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[500],
		// backgroundColor: '#253053'
	},
  icon: {
    fontSize: "30px !important",
    marginBottom: theme.spacing(1)
  },
}))

const SideMenu = (props) => {

	const { history } = props;
	const classes = useStyles();
	const [view, setView] = React.useState('list');

	const handleChange = (event, nextView) => {
	  setView(nextView);
	};
  const { setNavActive } = useGlobalState();

  useEffect(() => {
    setNavActive("Dashboard");
  },[setNavActive])

	return (
		<div className={classes.sideMenu}>
      <Grid container direction='column' wrap="wrap-reverse" alignItems="center" >
        <Grid item>
        <WrappedButton 
          text="Dashboard"
          onClick={() => 
            {history.push("/"); setNavActive("Dashboard") }}>
          <DashboardIcon className={classes.icon}/>
        </WrappedButton>	
        </Grid>
        <Grid item >
        <WrappedButton 
          text="Members"
          onClick={() => 
            {history.push("/members"); setNavActive("Members") }}>
          <PeopleIcon className={classes.icon}/>
        </WrappedButton>
        </Grid>	
        <Grid item >
        <WrappedButton 
          text="Schedule"
          onClick={() => 
            {history.push("/schedule"); setNavActive("Schedule") }}>
          <TodayIcon className={classes.icon}/>
        </WrappedButton>
        </Grid>	
      </Grid>
		</div>
	)
}

export default withRouter(SideMenu);
