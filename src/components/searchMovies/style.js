import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-height: 30px;
  padding-top: 10px;
  padding-right: 50px;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 12px 12px;
    a {
      width: 100%;
      padding: 10px;
    }
  }
  .search-bar {
    position: relative;
    width: 430px;
    span {
      position: absolute;
      right: 10px;
      top: 8px;
      text-align: center;
      img {
        width: 30px;
      }
    }
    input {
      width: 100%;
      font-size: 23px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 12px;
      &:focus {
        outline: none;
      }
    }
  }
  .card {
    width: 100%;
    height: 100px;
    display: flex;
    background: #f3f3f3;
    img {
      display: block;
      border-radius: 12px;
      width: 55px;
    }
    .card-data {
      font-size: 14px;
      display: flex;
      padding-left: 10px;
      flex-direction: column;
      gap: 5px;
      justify-content: space-around;
      h3 {
        margin: 0 0 0px 0;
      }
      p {
        font-weight: 500;
        margin: 0;
      }
    }
  }
`;
export default Style;
