import React, { Component } from "react";
import ResponsiveNavbarStyle from "./style";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import { logo, x, burger } from "../../assets/icons";
import { withRouter } from "react-router";

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

  closeMenuAndChangePage = () => {
    this.setState({ toggleMenu: false });
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
              <Link to={"/"} onClick={this.closeMenuAndChangePage}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={this.closeMenuAndChangePage}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={this.closeMenuAndChangePage}>
                Contact
              </Link>
            </li>
            <li>
              <Link to={"#"} onClick={this.closeMenuAndChangePage}>
                Book now
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNavbarStyle>
    );
  }
}

export default withRouter(ResponsiveNavbar);
