import React, { Component } from "react";
import MainStyle from "./style";
import bgImage from "../../../assets/images/palic.jpg";

import Button from "../../../components/Button";

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <MainStyle>
        <div className="main-image">
          <img src={bgImage} alt={bgImage} />
          <div className="text-over-image-container">
            <div className="bold-title">Beautiful destinations in Serbia</div>
            <div className="normal-title">
              The freedom to explore cultural highs and pursue nature’s
              pleasures your way
            </div>
            <div className="btn-section">
              <Button
                bgColor={"#46BAFB"}
                padding={"15px 40px"}
                margin={"10px"}
                fWeight={"600"}
                fSize={"17px"}
                bRadius={"50px"}
                txtColor={"#fff"}
                opacityHover={"0.9"}
                hoverBg={"#46BAFB"}
                hoverTxt={"#fff"}
                transition={"all 0.1s"}
                hoverBorder={"1px solid #46BAFB"}
                btnText={"Learn more"}
              ></Button>
              <Button
                bgColor={"#EAEAEA"}
                padding={"15px 40px"}
                margin={"10px"}
                fSize={"17px"}
                bRadius={"50px"}
                fWeight={"600"}
                txtColor={"#444444"}
                hoverBg={"#EAEAEA"}
                opacityHover={"0.9"}
                hoverTxt={"#444444"}
                transition={"all 0.1s"}
                btnText={"Book now"}
              ></Button>
            </div>
          </div>
        </div>
      </MainStyle>
    );
  }
}

export default Main;
