import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../helpers/api";
import { charDots } from "../../helpers/charDots";
import GenreMoviesListStyle from "./style";
const GenreMoviesList = ({ genreId }) => {
  const [genreMovies, setGenreMovies] = useState([]);
  async function getGenreMovieApi(id) {
    const res = await api.get(`/genres/${id}/movies`, {
      params: {
        page: "1",
      },
    });
    setGenreMovies(res.data.data);
  }
  useEffect(() => {
    getGenreMovieApi(genreId);
  }, []);
  function movieListRender() {
    return genreMovies.map((movie) => {
      const { id: movie_id, poster, title, year, genres, imdb_rating } = movie;
      return (
        <li key={movie_id}>
          <Link to={`/movies/${movie_id}`}>
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
    });
  }

  return <GenreMoviesListStyle>{movieListRender()}</GenreMoviesListStyle>;
};
export default GenreMoviesList;
