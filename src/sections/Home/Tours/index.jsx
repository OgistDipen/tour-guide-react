import React, { Component } from "react";
import ToursStyle from "./style";
import grass from "../../../assets/images/grass.jpg";

class Tours extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ToursStyle>
        <div className="top-description">
          <p>
            We do all the organization & planning. You do the fun part and
            <b>experience Serbia all by yourself!</b>
          </p>
          <p>
            Below you can find our <b>ready to book self-guided trips.</b> But
            please keep in mind that{" "}
            <b>every trip can be customized or designed from scratch</b> to make
            your dream holidays in Serbia come true.
          </p>
          <p>Because the trip is for you, only the sky is the limit! </p>
        </div>

        <div className="tours">
          <div className="row">
            <div className="tour">
              <div className="image-box">
                <img src={grass} alt={grass}></img>
                <div className="price">
                  1,390 &euro; <p>per person</p>
                </div>
              </div>
              <div className="description-box">
                <div className="tour-type">self-guided walking trip</div>
                <div className="tour-name">walking the alpe-adria trial</div>
                <div className="tour-duration">
                  <b>Duration:</b> 7 days
                </div>
                <div className="tour-difficulty">
                  <b>Difficulty:</b> 3,5/5
                </div>
                <div className="tour-schedule">
                  <b>When:</b> June to mid September
                </div>
                <div className="tour-small-description">
                  Experience high alpine scenery in the Julian Alps while hiking
                  beautiful trails without technical difficulties or sheer
                  drops.{" "}
                </div>
              </div>
            </div>
            <div className="tour">
              <div className="image-box">
                <img src={grass} alt={grass}></img>
                <div className="price">
                  1,390 &euro; <p>per person</p>
                </div>
              </div>
              <div className="description-box">
                <div className="tour-type">self-guided walking trip</div>
                <div className="tour-name">walking the alpe-adria trial</div>
                <div className="tour-duration">
                  <b>Duration:</b> 7 days
                </div>
                <div className="tour-difficulty">
                  <b>Difficulty:</b> 3,5/5
                </div>
                <div className="tour-schedule">
                  <b>When:</b> June to mid September
                </div>
                <div className="tour-small-description">
                  Experience high alpine scenery in the Julian Alps while hiking
                  beautiful trails without technical difficulties or sheer
                  drops.{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tour">
              <div className="image-box">
                <img src={grass} alt={grass}></img>
                <div className="price">
                  1,390 &euro; <p>per person</p>
                </div>
              </div>
              <div className="description-box">
                <div className="tour-type">self-guided walking trip</div>
                <div className="tour-name">walking the alpe-adria trial</div>
                <div className="tour-duration">
                  <b>Duration:</b> 7 days
                </div>
                <div className="tour-difficulty">
                  <b>Difficulty:</b> 3,5/5
                </div>
                <div className="tour-schedule">
                  <b>When:</b> June to mid September
                </div>
                <div className="tour-small-description">
                  Experience high alpine scenery in the Julian Alps while hiking
                  beautiful trails without technical difficulties or sheer
                  drops.{" "}
                </div>
              </div>
            </div>
            <div className="tour">
              <div className="image-box">
                <img src={grass} alt={grass}></img>
                <div className="price">
                  1,390 &euro; <p>per person</p>
                </div>
              </div>
              <div className="description-box">
                <div className="tour-type">self-guided walking trip</div>
                <div className="tour-name">walking the alpe-adria trial</div>
                <div className="tour-duration">
                  <b>Duration:</b> 7 days
                </div>
                <div className="tour-difficulty">
                  <b>Difficulty:</b> 3,5/5
                </div>
                <div className="tour-schedule">
                  <b>When:</b> June to mid September
                </div>
                <div className="tour-small-description">
                  Experience high alpine scenery in the Julian Alps while hiking
                  beautiful trails without technical difficulties or sheer
                  drops.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-description">
          <p>
            We do all the organization & planning. You do the fun part and
            <b>experience Serbia all by yourself!</b>
          </p>
          <p>
            Below you can find our <b>ready to book self-guided trips.</b> But
            please keep in mind that{" "}
            <b>every trip can be customized or designed from scratch</b> to make
            your dream holidays in Serbia come true.
          </p>
          <p>Because the trip is for you, only the sky is the limit! </p>
        </div>
      </ToursStyle>
    );
  }
}

export default Tours;
