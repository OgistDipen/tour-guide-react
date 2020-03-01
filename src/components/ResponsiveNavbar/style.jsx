import styled from "styled-components";

const ResponsiveNavbarStyle = styled.header`
  height: 75px;
  font-family: "Work Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  position: relative;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    margin-right: 20px;

    .toggle-burger {
      z-index: 999;

      .btnX {
        path {
          fill: #fff;
        }
      }
      svg {
        height: 30px;
        width: 30px;
        margin-top: 20px;
      }
    }
  }

  #responsive-header-menu {
    z-index: 99;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    background: #3a67a8;
    overflow-y: auto;
    transform: scale(0);
    transition: 0.5s;

    ul {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      overflow-y: auto;

      svg {
        position: absolute;
        top: 25px;
        right: 25px;
        width: 30px;
        height: 30px;
      }
      li {
        position: relative;
        list-style: none;
        text-align: center;
        display: block;

        p {
          position: relative;
          text-decoration: none;
          font-size: 30px;
          font-weight: 600;
          text-transform: uppercase;
          display: inline-block;
          margin: 15px 0px;
          color: #fff;
        }
      }
    }
  }

  #responsive-header-menu.active {
    transform: scale(1);
  }
`;

export default ResponsiveNavbarStyle;
