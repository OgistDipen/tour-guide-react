import styled from "styled-components";

const SingleTourStyle = styled.div`
  min-height: calc(100vh - 75px);
  position: relative;

  .main-section {
    display: flex;
    flex-direction: column;

    .image {
      position: relative;
      height: 535px;

      img {
        height: 535px;
        width: 100%;
        filter: brightness(95%);
      }

      .image-overlay-description {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;

        .big-title {
          color: #fff;
          font-weight: bold;
          font-size: 60px;
          text-align: center;
          letter-spacing: 0.3px;
        }

        .small-title {
          color: #fff;
          font-size: 25px;
          text-align: center;
        }

        .btns {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
        }
      }
    }

    .colored-description {
      height: 80px;
      background: #46bafb;
      padding: 0px 390px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        p {
          color: #fff;
          font-size: 18px;
          margin-left: 10px;
        }

        svg {
          width: 40px;
          height: 40px;
          path {
            fill: #fff;
          }
        }
      }
    }
  }

  .description-gallery-section {
    display: flex;
    padding: 25px 390px;
    flex-direction: column;
    .description {
      display: flex;
      justify-content: space-between;
      .highlights,
      .good-to-know {
        display: flex;
        flex-direction: column;
        width: 45%;
        .title {
          align-items: center;
          display: flex;

          svg {
            width: 50px;
            height: 50px;
            path {
              fill: #46bafb;
            }
          }
          p {
            color: #6a6b63;
            font-size: 25px;
            margin-left: 10px;
            font-weight: 500px;
          }
        }

        .bullets {
          margin-top: 30px;
          padding-left: 20px;
          li {
            display: flex;
            list-style: none;
            color: #6a6b63;
            margin-bottom: 10px;
            .period {
              height: 5px;
              width: 5px;
              background: #6a6b63;
              margin-top: 7px;
              margin-right: 10px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

  .two-images-section {
    display: flex;
    flex-direction: column;
    padding: 30px 390px;

    .images {
      display: flex;
      justify-content: space-between;
      .first-image {
        width: 30%;
        border-radius: 10px;
        height: 500px;
      }

      .second-image {
        width: 68%;
        height: 500px;
        border-radius: 10px;
      }
    }

    .overview {
      margin: 40px 0px;
      .title {
        font-size: 32px;
        color: #6a6b63;
        margin-bottom: 20px;
      }
      .overview-description {
        font-size: 15px;
        color: #6a6b63;

        p {
          margin-bottom: 15px;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }

  .image-map-section {
    padding: 30px 390px;
    .main-image {
      height: calc(100vh - 100px);
      width: 100%;
      border-radius: 10px;
    }

    .two-images {
      display: flex;
      justify-content: space-between;
      margin: 20px 0px;
      position: relative;

      .first-image {
        width: 40%;
        height: 500px;
        border-radius: 10px;
      }

      .map {
        width: 58%;
        height: 500px;
        border-radius: 10px;
      }
    }
  }
  .trip-price-bar {
    margin: 0px 0px;
    height: 110px;
    width: 100%;
    left: 0;
    background: #46bafb;
    padding: 0px 390px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 26px;
  }

  @media only screen and (max-width: 1650px) {
    padding: 0px;
    width: 100%;
    height: 100%;

    .main-section {
      .colored-description {
        padding: 30px 200px;
      }
    }
    .description-gallery-section,
    .two-images-section,
    .image-map-section {
      padding: 30px 200px;
    }
    .trip-price-bar {
      padding: 30px 200px;
    }
  }

  @media only screen and (max-width: 1250px) {
    .main-section {
      .colored-description {
        display: flex;
        flex-wrap: wrap;
        height: auto;
        justify-content: center;
        padding: 30px 100px;

        p {
          margin: 20px 30px;
        }
      }
    }
    .description-gallery-section,
    .two-images-section,
    .image-map-section {
      padding: 30px 100px;
    }
    .trip-price-bar {
      padding: 30px 100px;
    }
  }

  @media only screen and (max-width: 750px) {
    .main-section {
      .colored-description {
        padding: 20px 50px;

        p {
        }
      }
    }
    .description-gallery-section {
      padding: 20px 50px;

      .description {
        display: flex;
        flex-direction: column;

        .highlights,
        .good-to-know {
          width: 100%;

          .title {
            margin: 40px 0px;
            justify-content: center;
          }
          .bullets {
            li {
              justify-content: center;
            }
          }
        }
      }
    }
    .two-images-section {
      padding: 20px 50px;

      .images {
        flex-direction: column;
        .first-image,
        .second-image {
          width: 100%;
          margin: 15px 0px;
        }
      }
    }
    .image-map-section {
      padding: 20px 50px;
      .two-images {
        flex-direction: column;

        .first-image,
        .map {
          width: 100%;
          margin: 15px 0px;
        }
      }
    }
    .trip-price-bar {
      padding: 10px 30px;
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 460px) {
    .main-section {
      .image {
        justify-content: space-between;
        height: calc(100vh - 80px);
        img {
          height: calc(100vh - 80px);
        }
        .image-overlay-description {
          width: 300px;
          .big-title {
            font-size: 35px;
            margin: 25px 0px;
          }
          .btns {
            flex-direction: column;
            margin-top: 30px;
          }
        }
      }
      .colored-description {
        padding: 20px 30px;
        flex-direction: column;
        .item {
          text-align: center;
          flex-direction: column;
          margin: 5px 0px 25px 0px;
          p {
            margin: 0px;
            font-size: 20px;
          }
        }
      }
    }
    .description-gallery-section {
      padding: 20px 30px;

      .description {
        display: flex;
        flex-direction: column;

        .highlights,
        .good-to-know {
          width: 100%;

          .title {
            margin: 25px 0px 10px 0px;
            justify-content: center;
          }
          .bullets {
            li {
              justify-content: center;
              font-size: 17px;
            }
          }
        }
      }
    }
    .two-images-section {
      padding: 20px 30px;

      .images {
        flex-direction: column;
        .first-image,
        .second-image {
          height: 350px;
          width: 100%;
          margin: 15px 0px;
        }
      }
      .overview {
        .title {
          text-align: center;
        }
        .overview-description {
          text-align: justify;
        }
      }
    }
    .image-map-section {
      padding: 20px 30px;

      .main-image {
        height: 400px;
      }
      .two-images {
        flex-direction: column;
        .first-image,
        .map {
          height: 350px;
          width: 100%;
          margin: 15px 0px;
        }
      }
    }
    .trip-price-bar {
      padding: 30px 30px;
      text-align: center;
      flex-direction: column;
      font-size: 20px;
      height: auto;

      button {
        margin: 20px 0px 0px 0px;
      }
    }
  }
`;

export default SingleTourStyle;
