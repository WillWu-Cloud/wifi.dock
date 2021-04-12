import React from 'react'
import { makeStyles, Typography, Grid, List, ListItem, Box} from "@material-ui/core"
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';

import WrappedButton from '../components/controls/WrappedButton'
import { withRouter } from "react-router-dom";

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// withStyles & makeStyles
const useStyles = makeStyles(theme => ({
	sideMenu: {
		display: 'flex',
		flexDirectin: 'column',
		position: 'absolute',
		top: '70px',
		left: '0px',
		width: theme.spacing.unit * 9,
		height: '100%',
    	backgroundColor:
      	theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[500],
		// backgroundColor: '#253053'
	},
  icon: {
    fontSize: "30px !important",
    marginBottom: theme.spacing.unit
  },
  toggleButtonGroup: {
		top: '0px',
		left: '0px',
		width: theme.spacing.unit * 9,
		height: '100%',
  }
}))

const SideMenu = (props) => {

	const { history } = props;
	const classes = useStyles();
	const [view, setView] = React.useState('list');

	const handleChange = (event, nextView) => {
	  setView(nextView);
	};

	return (
		<div className={classes.sideMenu}>
    {/* <Grid container direction='column' wrap="wrap" alignItems="center" >
      <Grid item>
			<WrappedButton 
				text="Dashboard"
				onClick={() => history.push("/")} >
				<DashboardSharpIcon className={classes.icon}/>
			</WrappedButton>	
      </Grid>
      <Grid item >
			<WrappedButton 
				text="Members"
				onClick={() => history.push("/members")} >
				<SupervisorAccountRoundedIcon className={classes.icon}/>
			</WrappedButton>
      </Grid>	
    </Grid> */}

	<ToggleButtonGroup 
    className={classes.toggleButtonGroup} 
    orientation="vertical" 
    value={view} 
    exclusive 
    onChange={handleChange}>
      <ToggleButton value="Dashboard" aria-label="Dashboard">
	  	  <WrappedButton 
			  	text="Dashboard"
			  	onClick={() => history.push("/")} >
			  	<DashboardSharpIcon className={classes.icon}/>
		    </WrappedButton>
      </ToggleButton>
      <ToggleButton value="members" aria-label="members">
			  <WrappedButton 
			  	text="Members"
			  	onClick={() => history.push("/members")} >
			  	<SupervisorAccountRoundedIcon className={classes.icon}/>
			  </WrappedButton>
      </ToggleButton>
    </ToggleButtonGroup>

    {/* <List component="nav" style={{whiteSpace: "nowrap"}}>
      <ListItem style={{whiteSpace: "nowrap"}} >
      <WrappedButton 
				text="Dashboard"
				onClick={() => history.push("/")} >
				<DashboardSharpIcon className={classes.icon}/>
			</WrappedButton>	   
      </ListItem>
      <ListItem style={{whiteSpace: "nowrap"}}>
      <WrappedButton 
				text="Members"
				onClick={() => history.push("/members")} >
				<SupervisorAccountRoundedIcon className={classes.icon}/>
			</WrappedButton>
      </ListItem>
    </List> */}

		</div>
	)
}

export default withRouter(SideMenu);
