import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div id="registerBg">
        <h1 className="text-center pt-5 display-3 pb-5">
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

        <div className="box mt-5">
          <form noValidate onSubmit={this.onSubmit} autoComplete="off">
            <div className="inputBox">
              <input
                autoComplete="off"
                required
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
              />
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
            </div>
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
                  invalid: errors.email
                })}
              />
              <label htmlFor="email">Email</label>
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="inputBox">
              <input
                autoComplete="off"
                required
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
              />
              <label htmlFor="password">Password</label>
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="inputBox">
              <input
                autoComplete="off"
                required
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: errors.password2
                })}
              />
              <label htmlFor="password2">Confirm Password</label>
              <span className="red-text">{errors.password2}</span>
            </div>
            <div className="">
              <input type="submit" name="submit" value="Register" />

              <p className="text-white mt-2">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
