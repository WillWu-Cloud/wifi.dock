import React from "react";
import {
	Typography
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  button: {
    height: 95 // setting height/width is optional
  },
  label: {
    // Aligns the content of the button vertically.
    flexDirection: "column",
		textTransform: 'none'
  },
  icon: {
    fontSize: "48px !important",
    marginBottom: theme.spacing.unit
  }
});

const WrappedButton = (props) => {
	const { classes, text, onClick } = props;
	return (
	<Button
		/* Use classes property to inject custom styles */
		classes={{ root: classes.button, label: classes.label }}
		// variant="raised"
		color="primary"
		onClick={onClick}
	//   onClick={() => history.push("/contact")}
		// disableRipple={true}
	>
	 {/* <DashboardSharpIcon className={classes.icon} /> */}
	 {props.children}
	 	 <Typography variant="caption" style={{marginLeft:'8px', marginRight:'8px'}}>
       {text}
     </Typography> 

	</Button> )
};

// const WrappedButton = withStyles(styles)(CustomButton);
export default withStyles(styles)(WrappedButton);

