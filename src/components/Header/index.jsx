import React, { Component } from "react";
import NavbarStyle from "./style";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import { logo } from "../../assets/icons";
import Button from "../../components/Button";
import ResponsiveNavbar from "../../components/ResponsiveNavbar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false,
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  toggleBurger = () => {
    this.setState({ menuOpened: !this.state.menuOpened });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <NavbarStyle>
        {this.state.width > 700 ? (
          <ul>
            <div className="logo">
              <SVGInline svg={logo} />
            </div>
            <div className="main-header-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
            <div className="right-side-items">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <Button
                bgColor={"#EAEAEA"}
                width={"120px"}
                padding={"5px 15px"}
                margin={"10px 5px"}
                fWeight={"300"}
                fSize={"16px"}
                bRadius={"50px"}
                txtColor={"#444444"}
                hoverBg={"#fff"}
                hoverTxt={"#444444"}
                transition={"all 0.3s"}
                hoverBorder={"1px solid #000"}
                btnText={"Book now"}
              ></Button>
            </div>
          </ul>
        ) : (
          <ResponsiveNavbar
            toggleMenu={() => {
              this.toggleBurger(this.state.menuOpened);
            }}
          />
        )}
      </NavbarStyle>
    );
  }
}

export default Header;
