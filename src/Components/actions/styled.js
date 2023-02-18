import styled, { css } from "styled-components"

export const ActionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 15vh;
  width: 18vw;
  background-color: white;
  margin: 1em;
  border: 1px solid ${(props) => props.colorPrimary};
  border-radius: 8px;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  .left {
    display: flex;
    align-items: center;
    text-align: left;
    flex: 3;
    margin: 0.5rem;
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.colorPrimary};
  }
  .right {
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0.4rem;
    img {
      width: 6vw;
      height: 8vh;
    }
  }
  :hover {
    background-color: ${(props) => props.colorHover};
    transition: 0.4s all;
    .left {
      color: white;
    }
  }
`;