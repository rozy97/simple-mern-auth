import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import classnames from "classnames";
import pokeball from "../../assets/pokeball.png";
import cloud from "../../assets/cloud.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div id="loginBg">
        <h1
          className="text-center pt-5 display-3"
          style={{ backgroundImage: cloud }}
        >
          <img
            src="https://www.freeiconspng.com/uploads/pokemon-ball-png-1.png"
            width="50"
            alt="Pokemon ball png"
          />
          <span
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              letterSpacing: "0.07em"
              // fontStyle: "italic"
            }}
          >
            {" "}
            Pokemon Encyclopedia{" "}
          </span>

          <img
            src="https://raw.githubusercontent.com/rozy97/pic/master/PinClipart.com_wiki-clipart_168408.png"
            width="80"
            alt="Pokemon ball png"
          />
        </h1>
        <div className="box">
          <form noValidate onSubmit={this.onSubmit} autoComplete="off">
            <div className="inputBox">
              <input
                autoComplete="off"
                required
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
              />
              <label htmlFor="email">Email</label>
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div className="inputBox">
              <input
                required
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
              <label htmlFor="password">Password</label>
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>
            <div className="m-auto">
              <input type="submit" name="submit" value="Login" />
              <p className="text-white mt-2">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
