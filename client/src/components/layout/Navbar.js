import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-light bg-dark">
        <nav className="z-depth-0">
          <div className="nav-wrapper blue-grey darken-4">
            <Link
              to="/dashboard"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center cloud-text text-light"
            >
              <i className="material-icons">videogame_asset</i>
              POKEMON {"encyclopedia".toUpperCase()}
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
