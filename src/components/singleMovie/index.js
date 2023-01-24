import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";
import SingleMovieStyle from "./style";

const SingleMovie = () => {
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();
  async function getMovieApi() {
    const res = await api.get(`http://moviesapi.ir/api/v1/movies/${id}`);
    setMovieData(res.data);
  }
  function renderimages(img, title) {
    if (img && typeof img == "object") {
      return img.map((item) => {
        return <img src={item} alt={title && title.replaceAll(" ", "_")} />;
      });
    } else {
      return <img src={img} alt={title && title.replaceAll(" ", "_")} />;
    }
  }

  function renderMovieData() {
    const {
      writer,
      poster,
      imdb_rating,
      plot,
      runtime,
      title,
      year,
      awards,
      actors,
      director,
      genres,
      images,
      imdb_votes,
      country,
    } = movieData;
    return (
      <SingleMovieStyle>
        <div className="movie-data">
          <img src={poster} alt={title && title.replaceAll(" ", "_")} />
          <div className="data">
            <h1>{title}</h1>
            <p>country : {country}</p>
            <p className="imdb">
              imdb : <span>{imdb_rating}</span> ({imdb_votes})
            </p>
            <p>awards : {awards}</p>
            <p>year : {year}</p>
            <p>director : {director}</p>
            <p>actors : {actors && actors.replaceAll(",", " - ")}</p>
            <p className="plot">plot : {plot}</p>
            <p>genres : {genres && genres.join(" - ")}</p>
            {writer ? <p>writer : {writer.replaceAll(",", " - ")}</p> : <></>}
            <p> {`duration : ${runtime}`}</p>
          </div>
        </div>
        <div className="movie-images">
          {images && renderimages(images, title)}
        </div>
      </SingleMovieStyle>
    );
  }

  useEffect(() => {
    getMovieApi();
  }, []);
  return <div>{renderMovieData()}</div>;
};
export default SingleMovie;
