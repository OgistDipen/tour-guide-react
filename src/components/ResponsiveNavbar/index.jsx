import React, { Component } from "react";
import ResponsiveNavbarStyle from "./style";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import { logo, x, burger } from "../../assets/icons";

class ResponsiveNavbar extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };
  }

  toggleResponsiveMenu = () => {
    // this.props.toggleMenu()
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };

  closeMenu = () => {
    // this.props.toggleMenu()
    this.setState({ toggleMenu: false });
  };
  render() {
    console.log("toggleMenu RES", this.state.toggleMenu);

    return (
      <ResponsiveNavbarStyle>
        <ul className="navbar">
          <div className="logo">
            <SVGInline svg={logo} />
          </div>
          <div
            className="toggle-burger"
            onClick={() => {
              this.toggleResponsiveMenu();
            }}
          >
            {this.state.toggleMenu === false ? (
              <SVGInline className="btnBurger" svg={burger} />
            ) : (
              <SVGInline className="btnX" svg={x} />
            )}
          </div>
        </ul>
        <div
          id="responsive-header-menu"
          className={this.state.toggleMenu ? "active" : null}
        >
          <ul>
            <li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    this.closeMenu();
                  }}
                >
                  Home
                </Link>
              </li>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  this.closeMenu();
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  this.closeMenu();
                }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => {
                  this.closeMenu();
                }}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNavbarStyle>
    );
  }
}

export default ResponsiveNavbar;
