import React, { Component } from "react";
import NavbarStyle from "./style";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import { logo } from "../../assets/icons";
import Button from "../../components/Button";
import ResponsiveNavbar from "../../components/ResponsiveNavbar";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import en from "../../lang/en";
import sr from "../../lang/sr";

counterpart.registerTranslations("en", en);
// counterpart.registerTranslations("sr", sr);

// counterpart.setLocale("en");

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false,
      width: 0,
      height: 0
      // lang: "en"
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // changeLang = e => {
  //   this.setState({ lang: e.target.value });
  //   counterpart.setLocale(e.target.value);
  // };

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
                <Link to="/">
                  <Translate content="home" />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Translate content="about" unsafe={true} />
                </Link>
              </li>
            </div>
            <div className="right-side-items">
              {/* <li>
                <select value={this.state.lang} onChange={this.changeLang}>
                  <option value="en">ENGLISH</option>
                  <option value="sr">SERBIAN</option>
                </select>
              </li> */}
              <li>
                <Link to="/contact">
                  <Translate content="contact" />
                </Link>
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
