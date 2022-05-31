import styled from "styled-components";

export const BoxStyle = styled.div`
  flex: 6;
  flex-direction: column;
  align-items: center;
  background-color: white;
  display: flex;
  width: 100vw;
  height: 100vh;
  .title {
    flex: 0.1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin: 20px 20px 0 20px;
    border-radius: 8px;
    text-align: left;
    color: #4d4d4d;
    width: 93%;
  }
  .table {
    flex: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 20px;
    border-radius: 8px;
    text-align: left;
    color: #4d4d4d;
    width: 93%;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    .top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 5px;

      .btn-add {
        width: 20%;
        padding: 8px;
      }
    }
  }
`;

export const ModalStyled = styled.div`
  .box {
    color: white;
    border-radius: 8px !important;
  }
`;
