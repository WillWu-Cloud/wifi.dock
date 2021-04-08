import React from 'react'
import { makeStyles, Typography, Grid, ListItem} from "@material-ui/core"
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';

import WrappedButton from '../components/controls/WrappedButton'
import { withRouter } from "react-router-dom";
// withStyles & makeStyles

const useStyles = makeStyles(theme => ({
	sideMenu: {
		display: 'flex',
		flexDirectin: 'column',
		position: 'absolute',
		top: '70px',
		left: '0px',
		width: theme.spacing.unit * 8,
		height: '100%',
    	backgroundColor:
      	theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
		// backgroundColor: '#253053'
	},
  	icon: {
  	  fontSize: "40px !important",
  	  marginBottom: theme.spacing.unit
  	}
}))

const SideMenu = (props) => {

	const { history } = props;
	const classes = useStyles();

	return (
		<div className={classes.sideMenu}>
    <Grid container direction='column' wrap="nowrap" alignItems="center">
      <Grid item>
			<WrappedButton 
				text="Dashboard"
				onClick={() => history.push("/")} >
				<DashboardSharpIcon className={classes.icon}/>
			</WrappedButton>	
      </Grid>
      <Grid item>
			<WrappedButton 
				text="Members"
				onClick={() => history.push("/members")} >
				<SupervisorAccountRoundedIcon className={classes.icon}/>
			</WrappedButton>
      </Grid>	
    </Grid>
		</div>
	)
}

export default withRouter(SideMenu);
