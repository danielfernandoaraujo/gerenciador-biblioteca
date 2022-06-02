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
    margin-left: 8.5rem ;
    margin-top: 1rem ;
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
    color: #4d4d4d;
    width: 85%;
    .box{
      height: auto ;
      width: 94%;
      text-align: left;
      border-radius: 8px;
      padding: 10px;
      margin: 20px;
      box-shadow: 0px 10px 15px -4px rgba(0,0,0,0.1);
      animation: fadeInUp;
      animation-duration: .4s ;
      .top {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .btn-add {
          width: 20%;
          padding: 8px;
          margin-bottom: 10px ;
        }
    }
    @media (max-width: 1080px) {
      width: 100% ;
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
