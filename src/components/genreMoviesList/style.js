import styled from "styled-components";
const GenreMoviesListStyle = styled.ul`
  display: flex;
  color: whitesmoke;
  width: 100%;
  padding: 10px;
  h3 {
    color: whitesmoke;
  }
  li {
    display: flex;
    padding: 20px 10px;
    flex-direction: column;
    gap: 10px;
  }
  img {
    height: calc((100vh / 2));
    border-radius: 12px;
  }
  .movie-data {
    color: white;
    position: relative;
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
      bottom: 0px;
      border-radius: 8px;
      transition: 0.6s all ease-out;
      &:hover {
        opacity: 0.8;
      }
      .data {
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 8px 8px 0 0;
        padding-left: 5%;
        width: 100%;
        height: 50%;
        background: black;
      }
    }
  }
`;
export default GenreMoviesListStyle;
