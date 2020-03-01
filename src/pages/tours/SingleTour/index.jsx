import React, { Component } from "react";
import SingleTourStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import en from "../../../lang/en";
import SVGInline from "react-svg-inline";
import { tw } from "../../../assets/icons";
import grass from "../../../assets/images/grass.jpg";

class SingleTour extends Component {
  constructor() {
    super();
    this.state = {
      tourData: {}
    };
  }

  componentDidMount = () => {
    let tourName = this.props.match.params.tourName;
    this.setState({ tourData: en.tours[tourName] });
  };
  render() {
    let tour = this.state.tourData;
    return (
      <>
        <Header />
        <SingleTourStyle>
          <div className="main-section">
            <div className="image">
              <img src={grass} alt={grass} />
              <div className="image-overlay-description">
                <p className="big-title">Explore the Alpine Foothills</p>
                <p className="small-title">
                  A taste of life in the Julian Alps with views that go on for
                  miles
                </p>
                <div className="btns">
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
                    btnText={"Contact"}
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
            <div className="colored-description">
              <div className="item">
                <SVGInline svg={tw} />
                <p>Self-guided</p>
              </div>
              <div className="item">
                <SVGInline svg={tw} />
                <p>8 days</p>
              </div>
              <div className="item">
                <SVGInline svg={tw} />
                <p>Easy moderate</p>
              </div>
              <div className="item">
                <SVGInline svg={tw} />
                <p>March to Novembre</p>
              </div>
              <div className="item">
                <SVGInline svg={tw} />
                <p>1230,00 EUR</p>
              </div>
            </div>
          </div>

          <div className="description-gallery-section">
            <div className="description">
              <div className="highlights">
                <div className="title">
                  <SVGInline svg={tw} />
                  <p>Highlights</p>
                </div>
                <div className="bullets">
                  <li>
                    <div className="period"></div>
                    Walk, hike and bike in Austria, Slovenia and Italy in the
                    triple border region.{" "}
                  </li>
                  <li>
                    <div className="period"></div>
                    Walk, hike and bike in Austria, Slovenia and Italy in the
                    triple border region.{" "}
                  </li>
                  <li>
                    <div className="period"></div>
                    Walk, hike and bike in Austria, Slovenia and Italy in the
                    triple border region.{" "}
                  </li>
                  <li>
                    <div className="period"></div>
                    Walk, hike and bike in Austria, Slovenia and Italy in the
                    triple border region.{" "}
                  </li>
                  <li>
                    <div className="period"></div>
                    Walk, hike and bike in Austria, Slovenia and Italy in the
                    triple border region.{" "}
                  </li>
                </div>
              </div>

              <div className="good-to-know">
                <div className="title">
                  <SVGInline svg={tw} />
                  <p>Good to know</p>
                </div>
                <div className="bullets">
                  <li>
                    <div className="period"></div>It’s a hotel-based walking,
                    hiking and biking jaunt.{" "}
                  </li>
                  <li>
                    <div className="period"></div>It’s a hotel-based walking,
                    hiking and biking jaunt.{" "}
                  </li>
                  <li>
                    <div className="period"></div>It’s a hotel-based walking,
                    hiking and biking jaunt.{" "}
                  </li>
                  <li>
                    <div className="period"></div>It’s a hotel-based walking,
                    hiking and biking jaunt.{" "}
                  </li>
                  <li>
                    <div className="period"></div>It’s a hotel-based walking,
                    hiking and biking jaunt.{" "}
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div className="two-images-section">
            <div className="images">
              <img className="first-image" src={grass} alt={grass} />
              <img className="second-image" src={grass} alt={grass} />
            </div>
            <div className="overview">
              <p className="title">Overview</p>
              <p className="overview-description">
                <p>
                  {" "}
                  Explore the Alpine Foothills is a easygoing trip of refreshing
                  hikes in pure <b>natural surroundings.</b> You’ll explore the
                  verdant valleys and shimmering lakes of Triglav National park
                  amid glorious views of the mighty Julian Alps.{" "}
                </p>

                <p>
                  {" "}
                  There will be plenty of green on this trip, including the
                  <b>starting point in Ljubljana;</b> Europe’s greenest capital
                  city. From the capital you’ll head north on a number of
                  enchanting hikes through beautiful landscape and scenery in
                  the foothills of the Julian Alps. Here you can immerse
                  yourself in splendid views from high alpine pastures, and
                  marvel at the idyllic landscape of Triglav National Park.
                  After leaving Ljubljana, you will be based in nice small
                  hotels at Lake Bohinj and the ski town of Kranjska Gora. Three
                  nights in each location.
                </p>
                <p>
                  Our top choice for a multitude of easy valley walks or longer
                  mountain hikes, <b>while keeping it as relaxed</b> or as
                  active as you like. Get ready to go where the food grows,
                  where traditional meals are made by the farmer’s families, and
                  to experience alpine cuisine served by a friendly hand.
                </p>
              </p>
            </div>
          </div>
          <div className="image-map-section">
            <img className="main-image" src={grass} alt={grass} />
            <div className="two-images">
              <img className="first-image" src={grass} alt={grass}></img>
              <img className="map" src={grass} alt={grass}></img>
            </div>
          </div>
          <div className="trip-price-bar">
            Trip price: 1,230 EUR per person{" "}
            <Button
              bgColor={"transparent"}
              padding={"15px 40px"}
              margin={"10px 30px"}
              btnBorder={"1px solid #fff"}
              fSize={"17px"}
              bRadius={"50px"}
              txtColor={"#fff"}
              hoverBg={"#fff"}
              hoverTxt={"#000"}
              transition={"all 0.5s"}
              btnText={"Book now"}
            ></Button>
          </div>
        </SingleTourStyle>
        <Footer />
      </>
    );
  }
}

export default SingleTour;
