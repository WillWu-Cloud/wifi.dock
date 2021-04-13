import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import { CircularProgress } from "@material-ui/core";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false
    },
    isProcessing: false
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try {
      this.setState({isProcessing:true});
      const user = await Auth.signIn(this.state.username, this.state.password);
      console.log(user);
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user);
      this.props.history.push("/");
      this.setState({isProcessing:false});
    } catch (error) {
      this.setState({isProcessing:false});
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      })
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    if(this.state.isProcessing){
      return (
        <div     
          style={{
            position: 'absolute', left: '50%', top: '25%',
            transform: 'translate(-50%, -25%)'
        }}>
          <CircularProgress />
        </div>
      )  
    }else{
    return (
      <section className="section auth">
        <div className="container">
          <h1>Sign in</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">

              <div className="columns">
                <div className="column">
                  <a href="/forgotpassword">
                    Forgot password?
                    </a>
                </div>
                {/* <div className="column">
                    <a href="/changepassword" >
                      Change password?
                    </a>
                </div> */}
              </div>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-link">
                  Sign in
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
   }
  }
}

export default LogIn;