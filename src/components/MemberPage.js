import React from 'react'
import PageHeader from './PageHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  }
  
}));

export default function MemberPage() {

  const classes = useStyles();
  const filteredMembers = [];
  return (
    <div className={classes.root}>
       <PageHeader 
          title="Bizlink"
          subTitle=""
          qty={`${filteredMembers.length}`}
          unit="member"/>    
    </div>
  )
}
