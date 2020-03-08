import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-self: center;
  justify-items: center;
  flex-direction: column;
  text-align: center;
  margin: 30px 0;
  max-width: 350px;
  color: grey;
  > h2 {
    margin: 20px 0 10px;
  }
  > p {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;

export const ProfilePic = styled.img`
  width: 100%;
  border-radius: 50%;
  margin: 0 auto;
`;
