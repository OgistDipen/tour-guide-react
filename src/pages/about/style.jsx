import styled from "styled-components";

const AboutStyle = styled.div`
  min-height: calc(100vh - 75px);
  position: relative;

  @media only screen and (max-width: 460px) {
    width: 100%;
    height: 100%;
    padding: 0px;
  }
`;

export default AboutStyle;
