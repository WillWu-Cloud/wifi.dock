import React from 'react'
import { makeStyles, Typography, Grid, List, ListItem, Box} from "@material-ui/core"
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';

import WrappedButton from '../components/controls/WrappedButton'
import { withRouter } from "react-router-dom";

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { useSearch } from '../contexts/SearchProvider'

// withStyles & makeStyles
const useStyles = makeStyles(theme => ({
	sideMenu: {
		display: 'flex',
		flexDirectin: 'column',
		position: 'absolute',
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
  toggleButtonGroup: {
		top: '0px',
		left: '0px',
		width: theme.spacing(9),
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
  const { setNavActive } = useSearch();

	return (
		<div className={classes.sideMenu}>
      <Grid container direction='column' wrap="wrap" alignItems="center" >
        <Grid item>
        <WrappedButton 
          text="Dashboard"
          onClick={() => 
            {history.push("/"); setNavActive("Dashboard") }}>
          <DashboardSharpIcon className={classes.icon}/>
        </WrappedButton>	
        </Grid>
        <Grid item >
        <WrappedButton 
          text="Members"
          onClick={() => 
            {history.push("/members"); setNavActive("Members") }}>
          <SupervisorAccountRoundedIcon className={classes.icon}/>
        </WrappedButton>
        </Grid>	
      </Grid>
		</div>
	)
}

export default withRouter(SideMenu);
