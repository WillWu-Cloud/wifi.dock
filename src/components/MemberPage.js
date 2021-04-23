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
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close'
import Controls from "./controls/Controls"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  pageContent:{
    margin: theme.spacing(3),
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(0.5),
  },
}));

const headCells = [
  {id: 'name', label: 'Name'},
  {id: 'email', label: 'Email Address'},
  {id: 'department', label: 'Departement'},
  {id: 'role', label: 'Role'},
  {id: 'actions', label: 'Actions', disableSorting: true}
]

const filteredMembers = [{
  name: "Will",
  email: "will_wu@bizlinktech.com"

}]

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
        // qty={`${filteredMembers.length}`}
        qty="1"
        unit="member"/>   
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          <TableBody>
            {
                  <TableRow>
                    <TableCell>Will Wu</TableCell>
                    <TableCell>will_wu@bizlinktech.com</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <Controls.ActionButton
                        color="primary"
                         >
                          <EditOutlinedIcon fontSize="small" />
                      </Controls.ActionButton>
                      <Controls.ActionButton
                        color="secondary"
                      >
                        <CloseIcon fontSize="small" />
                      </Controls.ActionButton>
                    </TableCell>
                  </TableRow>
            }
          </TableBody>      
        </TblContainer>
        <TblPagination />     
      </Paper>      
    </div>
    
  )
}
