import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../helpers/api";
import MovieListStyle from "./style";
import { charDots } from "../../helpers/charDots";
const MovieList = ({ api_page, byType }) => {
  const [movieData, setMovieData] = useState([]);
  async function getApi() {
    const res = await api.get(`/${byType}`, {
      params: {
        page: api_page,
      },
    });
    setMovieData(res.data.data);
  }

  useEffect(() => {
    getApi();
  }, []);
  return (
    <MovieListStyle>
      {movieData.map((item) => {
        const { id, poster, title, year, genres, imdb_rating } = item;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <div className="movie-data">
                <img src={poster} alt={title.replaceAll(" ", "_")} />
                <div className="container">
                  <div className="data">
                    <p>Year : {year}</p>
                    <p>Genres : {genres.join(" - ")}</p>
                    <p>imdb : {imdb_rating}</p>
                  </div>
                </div>
              </div>
              <h3>{charDots(title)}</h3>
            </Link>
          </li>
        );
      })}
    </MovieListStyle>
  );
};
export default MovieList;
