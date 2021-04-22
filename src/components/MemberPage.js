import React, { useState } from 'react'
import PageHeader from './PageHeader';
import { 
  makeStyles, 
  Paper, 
  TableBody, 
  TableRow, 
  TableCell, 
  Toolbar, 
  InputAdornment } from '@material-ui/core';
import useTable from "./useTable";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  pageContent:{
    margin: theme.spacing(5),
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(0.5),
  },
}));

const headCells = [
  {id: 'Name', label: 'Member name'},
  {id: 'email', label: 'Email Address'},
  {id: 'role', label: 'Role'},
  {id: 'actions', label: 'Actions', disableSorting: true}
]

export default function MemberPage() {

  const classes = useStyles();
  const filteredMembers = [];
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({fn: items => { return items;}})

  const{
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPaginAndSorting
  } = useTable(records,headCells,filterFn);

  return (
    <div className={classes.root}>
      <PageHeader 
        title="Bizlink"
        subTitle=""
        qty={`${filteredMembers.length}`}
        unit="member"/>   
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          
        </TblContainer>
        <TblPagination />     
      </Paper>      
    </div>
    
  )
}
