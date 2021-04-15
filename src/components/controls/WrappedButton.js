import React from "react";
import {
	Typography,
  Box
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { useSearch } from '../../contexts/SearchProvider'

const styles = (theme) => ({
  button: {
    height: 85 , // setting height/width is optional
	  borderRadius:'0px',
	  background:'transparent',
    maxWidth: theme.spacing(8),
	//   "&.active": {
	// 	background:'black',
	//   },
	  // "&:focus":{
		// borderRight : '1px solid',
		// border : '1px solid',s
		// backgroundColor:'white',
		// borderLeft : '2px solid blue',
		// backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    // }  
  },
  label: {
    // Aligns the content of the button vertically.
    flexDirection: "column",
		textTransform: 'none',
  },
//   icon: {
//     fontSize: "28px !important",
//     marginBottom: theme.spacing.unit*0.5
//   }
});

const WrappedButton = (props) => {
	const { classes, text, onClick } = props;
  const { navActive } = useSearch();

	return (
	<Button
		/* Use classes property to inject custom styles */
		classes={{ root: classes.button, label: classes.label }}
    style={{background: navActive === text ? 'white' : 'transparent'}}
		// variant="raised"
		// color="primary"
		onClick={onClick}
	//   onClick={() => history.push("/contact")}
		// disableRipple={true}
	>
	 {/* <DashboardSharpIcon className={classes.icon} /> */}
	{props.children}
	 	 {/* <Typography variant="caption" style={{marginLeft:'8px', marginRight:'8px'}}> */}
		<Box fontSize={12} m={1}>
       {text}
		</Box>
	</Button> )
};

// const WrappedButton = withStyles(styles)(CustomButton);
export default withStyles(styles)(WrappedButton);

