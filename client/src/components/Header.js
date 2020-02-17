import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a className="nav-link" href="/auth/google">
            Login With Google
          </a>
        );
      default:
        return (
          <a className="nav-link" href="/api/logout">
            Logout
          </a>
        );
    }
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Emaily
        </a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
