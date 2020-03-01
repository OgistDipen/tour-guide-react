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
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };

  closeMenu = () => {
    this.setState({ toggleMenu: false });
  };

  closeMenuAndChangePage = link => {
    this.setState({ toggleMenu: false });
    setTimeout(() => {
      window.location.href = `${link}`;
    }, 500);
  };
  render() {
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
              <p
                onClick={() => {
                  this.closeMenuAndChangePage("/");
                }}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  this.closeMenuAndChangePage("/about");
                }}
              >
                About
              </p>
            </li>
            <li>
              <p
                to="/contact"
                onClick={() => {
                  this.closeMenuAndChangePage("/contact");
                }}
              >
                Contact
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  this.closeMenuAndChangePage("#");
                }}
              >
                Book Now
              </p>
            </li>
          </ul>
        </div>
      </ResponsiveNavbarStyle>
    );
  }
}

export default ResponsiveNavbar;
