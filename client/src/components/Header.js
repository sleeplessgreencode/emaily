import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item active">
            <a className="nav-link" href="/auth/google">
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1" className="nav-item navbar-item-margin">
            <Payments />
          </li>,
          <li key="2" className="nav-item navbar-item-margin">
            <button
              type="button"
              className="btn btn-outline-success active nav-link"
            >
              Credits: {this.props.auth.credits}
            </button>
          </li>,
          <li key="3" className="nav-item active navbar-item-margin">
            <a className="nav-link navbar-padding" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <Link to={this.props.auth ? "/surveys" : "/"} className="navbar-brand">
          Emaily
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
