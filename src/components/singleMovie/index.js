import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";
import SingleMovieStyle from "./style";
import NotFoundPage from "../../pages/notFoundPage";
import LoadingPage from "../../pages/loadingPage";

const SingleMovie = () => {
  const [movieData, setMovieData] = useState({});
  const [apiError, setApiError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  async function getMovieApi() {
    await api
      .get(`/movies/${id}`)
      .then(function (response) {
        setMovieData(response.data);
      })
      .catch(function () {
        setApiError(false);
      });
  }
  function renderimages(img, title) {
    if (img && typeof img == "object") {
      return img.map((item, i) => {
        return (
          <img src={item} alt={title && title.replaceAll(" ", "_")} key={i} />
        );
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
          <img
            className="poster"
            src={poster}
            alt={title && title.replaceAll(" ", "_")}
          />
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
  function pageErrorHandle() {
    return apiError ? <div>{renderMovieData()}</div> : <NotFoundPage />;
  }
  useEffect(() => {
    setIsLoading(true);
    getMovieApi();
    setIsLoading(false);
  }, []);
  return isLoading ? <LoadingPage /> : pageErrorHandle();
};
export default SingleMovie;
