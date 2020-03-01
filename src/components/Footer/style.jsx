import styled from "styled-components";

const FooterStyle = styled.div`
  background: #292e31;
  padding: 90px 390px 60px 390px;
  color: #fff;
  display: flex;
  flex-direction: column;

  .mainSection {
    display: flex;
    flex-basis: 100%;
    flex-direction: row;

    .titleSection {
      flex-basis: 40%;

      .title {
        display: flex;
        flex-direction: row;
        position: relative;
        h1 {
          font-weight: bold;
        }

        svg {
          position: absolute;
          right: 40px;
          height: 60px;
          width: 60px;
        }
      }

      .address {
        margin-top: 100px;

        p {
          font-weight: 600;
          font-size: 16px;
          margin: 2.5px 0px;
        }
      }
    }
    .linksSection {
      flex-basis: 60%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      padding: 30px 0px;

      .footerSection {
        width: 40%;
        margin-bottom: 50px;

        .titleSection {
          display: flex;
          /* 
    .number {
      font-size: 26px;
      opacity: 0.7;
      ::after {
        content: " - ";
      }
    } */

          .title {
            margin-left: 5px;
            font-size: 22px;
            font-weight: bold;
            width: fit-content;
          }
        }
        .itemsSection {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          a {
            margin: 5px 0px 0px 0px;
            margin-left: 5px;
            font-weight: 600;
            line-height: 1.1;
            font-size: 14px;
            letter-spacing: 0.5px;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            opacity: 0.7;
            width: fit-content;

            :hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .privacySection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-basis: 5%;

    .privacy {
      opacity: 0.6;
      width: 100%;
    }

    .socialIcons {
      margin-right: 100px;
      position: relative;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      svg {
        width: 30px;
        height: 30px;
        margin: 0px 10px;
        cursor: pointer;
        path {
          fill: #fff;
          opacity: 0.7;
        }
      }
    }
  }

  @media only screen and (max-width: 1450px) {
    padding: 30px 200px;
  }

  @media only screen and (max-width: 1150px) {
    padding: 30px 100px;
  }

  @media only screen and (max-width: 900px) {
    padding: 30px 100px;

    .mainSection {
      display: flex;
      flex-direction: column;

      .linksSection {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0px;

        .footerSection {
          width: fit-content;

          .itemsSection {
            width: fit-content;
          }
        }
      }
    }
    .privacySection {
      .socialIcons {
        margin-right: 0px;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    padding: 30px 100px;

    .privacySection {
      display: flex;
      flex-direction: column-reverse;
      text-align: center;

      .socialIcons {
        justify-content: center;
        margin-bottom: 30px;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    padding: 50px 100px;

    .mainSection {
      display: flex;
      flex-direction: column;

      .titleSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
          width: 100%;

          h1 {
            width: 100%;
          }
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .address {
          text-align: center;
          margin-top: 50px;
          margin-bottom: 50px;
        }
      }

      .linksSection {
        display: flex;
        /* flex-wrap: wrap; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px 0px;

        .footerSection {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;

          .titleSection {
            .title {
              text-align: center;
              font-size: 25px;
              letter-spacing: 1px;
            }
          }

          .itemsSection {
            display: flex;
            justify-content: center;

            a {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
    }

    .privacySection {
      text-align: center;
      .socialIcons {
      }
    }
  }

  @media only screen and (max-width: 420px) {
    padding: 50px;
  }
`;

export default FooterStyle;
