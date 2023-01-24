import styled from "styled-components";
const SingleMovieStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  p {
    text-transform: capitalize;
    span {
      font-weight: bold;
    }
  }
  .movie-data {
    display: flex;
    width: 100%;
  }
  .data {
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px;
    .imdb {
      display: flex;
      gap: 10px;
      text-transform: uppercase;
    }
    .plot {
      max-width: 500px;
      line-height: 1.6;
      font-size: 18px;
    }
  }
  .movie-images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    img {
      padding: 10px;
      width: 20%;
    }
  }
`;
export default SingleMovieStyle;
