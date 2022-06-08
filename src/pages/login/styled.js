import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: hsla(221, 89%, 43%, 1);
  background: linear-gradient(
    180deg,
    hsla(221, 89%, 43%, 1) 0%,
    hsla(204, 98%, 46%, 1) 100%
  );

  //background: linear-gradient(180deg, hsla(221, 89%, 43%, 1) 76%, hsla(220, 71%, 48%, 1) 100%);

  .conteiner {
    display: flex;
    flex-direction: column;
    height: 69.2vh;
    width: 28vw;
    margin-top: 5em;
    margin-bottom: 35px;

    .logo {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 10px;

      //********LOGO DO ATHENEU**********//
      img {
        width: 3.5em;
        margin-right: 1rem;
      }
      h1 {
        font-size: 2em;
        color: white;
        span {
          color: #f7b731;
        }
      }
    }
    .box-input {
      flex: 4;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0px 8px 20px 2px rgba(0, 0, 0, 0.57);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      //padding: 0px 50px ;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;
        text-align: center;
        color: #245dd2;
        font-size: 2rem;
        @media (max-width: 900px) {
          font-size: 1.8rem;
        }
        @media (max-width: 500px) {
          font-size: 1.7rem;
        }
      }
      .inputs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex: 3;
        width: 100%;
      }
      .input {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-bottom: 10px;
        label {
          color: #41414b;
        }
        input {
          /* padding-left: 5px ; */
          margin-right: 10px;
          border: none;
          border-bottom: 2px solid #cbcbd2;
          background-color: none;
          text-align: left;
          width: 100%;
          height: 4vh;
          ::placeholder {
            font-size: 15px;
          }
          &:focus {
            outline: 0;
            border: none;
            border-bottom: 2px solid #149ed4;
            //box-shadow: 0px 0px 0px 3px  #a4e0f7;
            background-color: white;
            transition: 0.7s;
            ::placeholder {
              color: white;
              transition: 0.9s;
            }
          }
        }
      }
      .button {
        flex: 2;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        button {
          width: 100%;
          height: 6.5vh;
          background-color: #245dd2;
          border-radius: 4px;
          border: none;
          font-size: 1.2rem;
          color: white;
          cursor: pointer;

          &:hover {
            background-color: #396dd6;
            transition: 0.7s all;
          }
        }
        .msg-error {
          position: absolute;
          height: 12px;
          top: 105%;

          .alert {
            animation: flipInX;
            animation-duration: 0.7s;
          }
        }
      }
    }

    @media (max-width: 900px) {
      width: 40vw;
    }
    @media (max-width: 750px) {
      width: 55vw;
    }
    @media (max-width: 425px) {
      width: 85vw;
    }
  }
  .credits {
    display: flex;
    flex-direction: column;
    color: #e9e9e9;
    font-size: 15px;
    padding: 5px;
    .icons {
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        color: #e9e9e9;
        margin: 4px;
        cursor: pointer;
        text-decoration: none;
        :hover {
          color: #d6d6d6;
          transition: 0.4s all;
        }
      }
    }
  }
`;
