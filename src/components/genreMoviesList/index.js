import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../helpers/api";
import MovieListStyle from "../movieList/style";
import { charDots } from "../../helpers/charDots";
import Style from "./style";
import { genreFinder } from "../../helpers/genre";
const GenreMoviesList = ({}) => {
  const [genreMovies, setGenreMovies] = useState([]);
  const { id } = useParams();
  async function getMovieApi() {
    const res = await api.get(`/genres/${id}/movies`);
    setGenreMovies(res.data.data);
  }
  useEffect(() => {
    getMovieApi();
  }, []);
  return (
    <Style>
      <h1>{genreFinder(id)}</h1>
      <MovieListStyle>
        {genreMovies.map((item) => {
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
    </Style>
  );
};
export default GenreMoviesList;
