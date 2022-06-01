import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  .title {
    text-align: left;
    color: #3e3e3e;
  }
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0 15px 0;
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 5px;
      margin-top: 15px;
      height: 100%;
      width: 100%;
    }
    .left {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-top: 15px;
      height: 100%;
      width: 100%;
    }
  }
  .btn {
    margin-top: 32px;
    width: 100%;
    background-color: #2154bf;
  }
  .msg-erro {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 105%;
    left: 26%;

    .alert {
      animation: flipInX;
      animation-duration: 0.7s;
    }
  }
`;
