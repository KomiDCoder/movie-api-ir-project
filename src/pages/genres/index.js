import { useEffect, useState } from "react";
import api from "../../helpers/api";
import GenreMoviesList from "../../components/genreMoviesList";
import GenrePageStyle from "./style";
const GenrePage = () => {
  const [genres, setGenres] = useState([]);
  async function getGenresApi() {
    const res = await api.get("/genres");
    setGenres(res.data);
  }
  function genresRender() {
    return genres.map((genreItem) => {
      return (
        <GenrePageStyle key={genreItem.id}>
          <h1>{genreItem.name}</h1>
          <GenreMoviesList genreId={genreItem.id} />
        </GenrePageStyle>
      );
    });
  }
  useEffect(() => {
    getGenresApi();
  }, []);
  return <div>{genresRender()}</div>;
};

export default GenrePage;
