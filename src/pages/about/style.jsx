import styled from "styled-components";

const AboutStyle = styled.div`
  min-height: calc(100vh - 75px);
  position: relative;

  @media only screen and (max-width: 460px) {
    width: 100%;
    height: 100%;
    padding: 0px;
  }

  .section-one {
    width: 100%;
    justify-content: center;
    display: flex;
    text-align: center;

    .image {
      width: 100%;
      height: 600px;
      .primary-image-text {
      }
    }
  }
  .section-two {
    width: 80%;
    margin: 50px auto;
  }
  .section-three {
    width: 80%;
    margin: 0 auto 50px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    gap: 50px;
  }
  @media (min-width: 728px) {
    .section-two {
      width: 70%;
    }
    .section-three {
      width: 70%;
    }
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1200px) {
    .section-two {
      width: 60%;
    }
    .section-three {
      width: 60%;
    }
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export const PrimaryBgImage = styled.img`
  object-fit: cover;
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

export const Title = styled.h1`
  margin: 150px auto;
  position: absolute;
  top: 0;
  color: white;
  font-size: 2.5rem;
  width: 80%;
  @media (min-width: 728px) {
    font-size: 3rem;
    width: 60%;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-top: 50px;
  color: grey;
`;
export const SectionTitle = styled.p`
  color: grey;
  font-size: 2rem;
`;
export default AboutStyle;
