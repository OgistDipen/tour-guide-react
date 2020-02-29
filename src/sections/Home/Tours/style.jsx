import styled from "styled-components"

const ToursStyle = styled.div`
  padding: 0px 380px;
  background: #fbfcfd;

  .top-description {
    text-align: center;
    margin-top: 20px;
    p {
      line-height: 25px;
      margin-bottom: 10px;
      font-size: 16px;
      color: #666666;
      padding: 0px 10px;
    }
  }

  .tours {
    margin: 50px 0px;
    .row {
      display: flex;
      justify-content: space-between;
      margin: 25px 0px;
    }
    .tour {
      -webkit-box-shadow: 0px -1px 16px -1px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0px -1px 16px -1px rgba(0, 0, 0, 0.3);
      box-shadow: 0px -1px 16px -1px rgba(0, 0, 0, 0.3);
      background: #f1f1f1;
      width: 49%;
      border-radius: 5px;

      .image-box {
        position: relative;

        img {
          border-radius: 5px;
          height: 375px;
          width: 100%;
        }
        .price {
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          border-radius: 5px;
          font-size: 25px;
          position: absolute;
          color: #fff;
          p {
            font-size: 14px;
          }
        }
      }

      .description-box {
        padding: 20px 25px;
        color: #666666;
        .tour-type {
          font-size: 13px;
          margin-bottom: 7px;
          text-transform: uppercase;
        }

        .tour-name {
          color: #44bbff;
          font-size: 22px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
        .tour-duration,
        .tour-schedule,
        .tour-difficulty {
          margin-bottom: 5px;
        }

        .tour-small-description {
          margin-top: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 1650px) {
    padding: 0px 200px;
  }

  @media only screen and (max-width: 1250px) {
    padding: 0px 75px;
  }

  @media only screen and (max-width: 1050px) {
    padding: 0px 75px;

    .tours {
      justify-content: center;
      .row {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 0px;
        .tour {
          width: 60%;
          margin: 30px 0px;
        }
      }
    }
  }

  @media only screen and (max-width: 850px) {
    .tour {
      width: 80% !important;
      margin: 30px 0px;
    }
  }

  @media only screen and (max-width: 670px) {
    padding: 0px 30px;

    .tour {
      height: 650px !important;
    }
  }

  @media only screen and (max-width: 460px) {
    padding: 0px 10px;

    .tour {
      width: 90% !important;
      height: auto !important;
    }
  }
`

export default ToursStyle
