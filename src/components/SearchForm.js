import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useSearch } from '../contexts/SearchProvider'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  searchForm: {
    margin: theme.spacing(0),
    display: 'flex',
    flexWrap: 'wrap',
    size: 'small'
  },
}));

const SearchForm = () => {
  const { handleSearchInput } = useSearch();
  const classes = useStyles();

  return (
    <>
    <FormControl fullWidth className={classes.searchForm} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-search"
        onChange={handleSearchInput}
        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
        labelWidth={0}
        style={{ height: 38 , width:625}}
      />        
    </FormControl>
    </>  

  )
}

export default SearchForm


{/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allDevices.map((option) => option.name)}
        renderInput={(params) => (  
          <TextField
            {...params}
            id="outlined-adornment-search"
            onChange={handleSearchInput}
            style={{ height: 38 , width:625}}
            InputProps={{ 
              ...params.InputProps, 
              type: 'search' ,
              startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>)
            }}
          />  
        )}
      />} */}

{/* <div className={classes.searchContainer}>
<SearchIcon className={classes.searchIocn} />
<TextField 
  className={classes.searchInput}
  variant="outlined"
/>  
</div> */}

{/* <div className={classes.margin}>
<Grid container spacing={1} alignItems="flex-end" >
  <Grid item>
    <TextField id="input-with-icon-grid" label="Search" fullWidth />
  </Grid>
  <Grid item>
    <SearchIcon />
  </Grid>
</Grid>
</div> */}

// searchContainer: {
//   display: "flex",
//   backgroundColor: fade(theme.palette.common.white, 0.5),
//   paddingLeft: "20px",
//   paddingRight: "20px",
//   marginTop: "5px",
//   marginBottom: "5px"
// },
// searchIocn: {
//   alignSelf: "flex-end",
//   marginBottom: "5px"
// },
// searchInput: {
//   width: "200px",
//   margin: "5px"
// },