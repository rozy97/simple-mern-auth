import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import PokemonList from "../pokemon/PokemonList";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <>
        <div className="container">
          <div className="row mt-3 mb-3">
            <div
              style={{ display: "flex" }}
              className="col s12 center-align display-flex"
            >
              <h4 className="mr-auto mt-auto mb-auto">
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into{" "}
                  <span style={{ fontFamily: "monospace", fontSize: "27px" }}>
                    POKEMON
                  </span>{" "}
                  ENCYCLOPEDIA 👏
                </p>
              </h4>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 mt-auto mb-auto"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <PokemonList />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
