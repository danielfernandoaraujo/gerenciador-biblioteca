import styled from "styled-components";

export const AvisoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    hsla(221, 89%, 43%, 1) 0%,
    hsla(204, 98%, 46%, 1) 100%
  );
  p {
    color: white;
    font-size: 15px;
    margin-bottom: 10px;
  }
  img {
    width: 250px;
    border-radius: 10px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
