import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <>
    </>
    // <Typography variant="body2" color="textSecondary">
    //   {'Copyright © '}
    //   <Link color="inherit" href="https://bizlinktech.com/">
    //     Bizlink
    //   </Link>{' '}
    //   {new Date().getFullYear()}
    //   {'.'}
    // </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
    bottom:0,
    position: "fixed",
    width: "100%",
    
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    bottom:0,
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },

}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1"></Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="content has-text-centered">
//         <p>
          
//         </p>
//       </div>
//     </footer>
//   )
// }
