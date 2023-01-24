import styled from "styled-components";
const MovieListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    display: flex;
    padding: 20px 10px;
    width: calc(100% / 5);
    li a {
      display: flex;
      /* justify-content: flex-start; */
      align-items: flex-start;
      flex-direction: column;
    }
    h3 {
      /* font-size: 10px; */
      margin-top: 15px;
      color: whitesmoke;
    }
  }
  img {
    width: 100%;
    border-radius: 8px;
  }
  .movie-data {
    position: relative;
    color: white;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
    .container {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      border-radius: 8px;
      transition: 0.6s all ease-out;
      &:hover {
        opacity: 0.8;
      }
      .data {
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 8px;
        padding-left: 5%;
        width: 100%;
        height: 50%;
        background: black;
      }
    }
  }
`;
export default MovieListStyle;
