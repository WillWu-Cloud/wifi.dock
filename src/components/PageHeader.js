import { 
  Card, 
  makeStyles, 
  Paper, 
  Typography, 
  Button, 
  Box, 
  Grid, 
  ListItemText} from '@material-ui/core';
import React from 'react';
import SearchForm from '../components/SearchForm';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add'


const useStyles = makeStyles(theme => ({
  root: {
		marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.background.paper
  },
  pageHeader:{
		alignItems: 'center',
    padding:theme.spacing(0.5),
    display:'flex',
    marginBottom:theme.spacing(0.5)
  },
  pageIcon:{
    display:'inline-block',
    padding:theme.spacing(1),
    color:'#3c44b1'
  },
  pageTitle:{
    paddingLeft: theme.spacing(2),
    '& .MuiTypography-subtitle2':{
      opacity: '0.6'
    }
  },
	pageAddBtn:{
		right:'0px'
	},
  label: {
    textTransform: 'none'
  }
}))

const PageHeader = (props) => {
  const classes = useStyles();
  const { title, subTitle, icon, qty } = props;
  return (

      <div className={classes.pageHeader}>
        {/* <Card className={classes.pageIcon}>
          {icon}
        </Card> */}
        <div className={classes.pageTitle}>
        {/* <ListItemText align="center" primary={title} secondary={ qty > 1 ? `${qty}  devices`: `${qty}  device`} /> */}
          <Typography 
            display="inline"
            variant="h6"
            component="div">
            {title}</Typography> 
          <Typography 
            variant="subtitle2"
            component="div">
             { qty > 1 ? `${qty}  devices`: `${qty}  device`}
          </Typography> 
        </div>
				<Grid container justify="flex-end">
				<div className={classes.pageAddBtn}>
					<Button 
            variant = "outlined"
            color="primary"
            startIcon = {<AddIcon />}
            classes={{root:classes.root,label:classes.label}}
          >New</Button>
      	</div>
				</Grid>
			</div>	

  )
}

export default PageHeader
