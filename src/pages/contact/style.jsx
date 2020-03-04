import styled from "styled-components";
import grass from "../../assets/images/grass.jpg";

const ContactStyle = styled.div`
  background: #fbfcfd;
  min-height: calc(100vh - 75px);
  position: relative;
  display: flex;
  background: #f9f8f8;

  form {
    padding: 100px 200px 0px 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 50%;
    width: 700px;
    margin: 30px auto;
    h1 {
      margin-bottom: 50px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .inputField {
        width: 45%;
      }
    }
    input,
    textarea {
      background: #f9f8f8;
    }

    label {
      margin: 15px 0px;
    }

    .inputDiv {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .contactInfo {
    position: relative;
    background: url(${grass});
    background-size: 100% 100%;
    margin: 0px;
    flex-basis: 30%;
    /* padding: 30px 50px 00px 200px; */
    color: #fff;

    .info {
      padding: 150px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p {
      margin-bottom: 5px;
    }
  }

  @media only screen and (max-width: 1500px) {
    form {
      width: 100%;
      padding: 100px 50px;
    }
  }

  @media only screen and (max-width: 1150px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    form {
      width: 100%;
      flex-basis: 80%;
      padding: 100px 20px;
      margin: 50px 0px;
      display: flex;
      justify-content: center;

      h1 {
        text-align: center;
      }

      button {
        width: 100%;
      }
    }
    .contactInfo {
      display: none;
    }
  }
  @media only screen and (max-width: 620px) {
    form {
      padding: 50px 20px;
      .row {
        flex-direction: column;
        .inputField {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 460px) {
    form {
      flex-basis: 100%;
      padding: 0px 20px;

      button {
        margin: 20px 0px;
      }
    }
  }
`;

export default ContactStyle;
