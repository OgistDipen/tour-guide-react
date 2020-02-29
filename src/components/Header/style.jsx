import styled from "styled-components"

const HeaderStyle = styled.header`
  height: 75px;
  font-family: "Work Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  position: relative;
  background: #fbfcfd;
  ul {
    display: flex;
    .logo {
      margin-left: 20px;
      flex-basis: 5%;
      display: flex;
      height: 75px;
      width: 135px;
      svg {
        width: 135px;
        height: 95px;
        margin-top: -5px;
      }
    }

    .main-header-items {
      margin-top: 15px;
      flex-basis: 70%;
      margin-left: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      li {
        list-style: none;
        margin: 0px 15px;

        a {
          color: #444444;
          text-decoration: none;
        }
      }
    }

    .right-side-items {
      margin-top: 15px;
      flex-basis: 20%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      margin-right: 30px;
      li {
        list-style: none;
        margin: 0px 15px;
        a {
          color: #444444;
          text-decoration: none;
        }
      }

      .book-now {
        background: #eaeaea;
        color: #444444;
        border-radius: 50px;
        padding: 5px 15px;
      }
    }
  }
`

export default HeaderStyle
