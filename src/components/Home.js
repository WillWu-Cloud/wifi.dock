import React, { Fragment } from 'react';
// import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home(props) {
  return (
    <Fragment>
      <div className="box cta">
        <p className="has-text-centered">
          {/* <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. */}
        </p>
      </div>
      {/* {!props.auth.isAuthenticated && props.history.push("/signin")} */}
      {/* {props.auth.isAuthenticated &&  */}
        <HomeContent />
    </Fragment>
  )
}
