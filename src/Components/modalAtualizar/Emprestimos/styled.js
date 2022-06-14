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
    align-items: flex-start;
    justify-content: center;
    padding: 15px 0 15px 0;
    .rigth {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      .data-div {
        margin-top: 30px;
        color: #868686;
        .dataPicker {
          width: 95%;
          font-size: 16px;
          color: #868686;
          border: none;
          border-bottom: 1px solid #868686;
          :focus {
            transition: 0.4s;
            box-shadow: 0 0 0 0;
            border-bottom: 1px solid #2154bf;
            outline: 0;
          }
        }
      }
    }
    .left {
      flex: 1;
      display: flex;

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
    width: 72%;
    top: 105%;
    left: 14%;

    .alert {
      animation: flipInX;
      animation-duration: 0.7s;
    }
  }
`;
