import styled from "styled-components"

const MainStyle = styled.div`
  .main-image {
    position: relative;

    img {
      width: 100%;
      height: 600px;
      filter: brightness(80%);
    }

    .text-over-image-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .bold-title {
        color: #fff;
        font-weight: bold;
        font-size: 60px;
        text-align: center;
        letter-spacing: 0.3px;
      }

      .normal-title {
        color: #fff;
        font-size: 25px;
        text-align: center;
      }

      .btn-section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
      }
    }
  }
  @media only screen and (max-width: 1350px) {
    .text-over-image-container {
      width: 75%;
    }
  }

  @media only screen and (max-width: 1050px) {
    img {
      width: 150%;
      background-size: 150% 150%;
      height: 80vh;
    }

    .text-over-image-container {
      .bold-title {
        font-size: 40px;
      }
      .normal-title {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 460px) {
    img {
      height: calc(100vh - 75px) !important;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
    }

    .text-over-image-container {
      .bold-title {
        font-size: 40px !important;
      }
      .normal-title {
        font-size: 20px !important;
        margin-top: 30px;
      }
      .btn-section {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`

export default MainStyle
