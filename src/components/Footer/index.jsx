import React, { Component } from "react";
import FooterStyle from "./style";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import { logo, fb, ins, tw, li } from "../../assets/icons";
import ScrollUpButton from "../ScrollUpButton";

export default class Footer extends Component {
  render() {
    var date = new Date();
    var currentYear = date.getFullYear();
    return (
      <FooterStyle>
        <div className="mainSection">
          <div className="titleSection">
            <div className="title">
              <h1>Serbia Travel</h1>
              {/* <SVGInline svg={logo} /> */}
            </div>

            <div className="address">
              <p>Tolstojeva 12 </p>
              <p>Beograd, Serbia</p>
              <p>+381 111 333</p>
              <p>contact@gmail.com</p>
            </div>
          </div>

          <div className="linksSection">
            <div className="footerSection">
              <div className="titleSection">
                <div className="title">Our Trips</div>
              </div>
              <div className="itemsSection">
                <Link to="#">Zlatar</Link>
                <Link to="#">Exit</Link>
                <Link to="#">Palic</Link>
                <Link to="#">Kopaonik</Link>
              </div>
            </div>
            <div className="footerSection">
              <div className="titleSection">
                <div className="title">About Us</div>
              </div>
              <div className="itemsSection">
                <Link to="#">About Serbia</Link>
                <Link to="/about">About us</Link>
                <Link to="#">Reviews</Link>
              </div>
            </div>
            <div className="footerSection">
              <div className="titleSection">
                <div className="title">Contact</div>
              </div>
              <div className="itemsSection">
                <Link to="#">contact@gmail.com</Link>
                <Link to="#">+381 64 111 222</Link>
                <Link to="#">Address ...</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="privacySection">
          <div className="privacy">
            Serbia Travel - All Rights Reserved - {currentYear}
          </div>
          <div className="socialIcons">
            <a href="http://facebook.com">
              <SVGInline svg={fb} />
            </a>
            <a href="http://instagram.com">
              <SVGInline svg={ins} />
            </a>
            <a href="http://twitter.com">
              <SVGInline svg={tw} />
            </a>
            <a href="http://linkedin.com">
              <SVGInline svg={li} />
            </a>
          </div>
          <ScrollUpButton />
        </div>
      </FooterStyle>
    );
  }
}
