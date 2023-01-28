import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../helpers/api";
import Style from "./style";
const SearchMovies = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  async function getSearchApi(value) {
    const res = await api.get("/movies", {
      params: {
        q: `${value}`,
        page: "1",
      },
    });
    setSearchResult(res.data.data);
  }
  function checkValue(value) {
    if (value.length > 3) {
      getSearchApi(value);
    } else {
      setSearchResult([]);
    }
  }
  function renderFarm() {
    return searchResult.map((item) => {
      const { id, imdb_rating, poster, title, genres } = item;
      return (
        <div className="card" key={id}>
          <Link to={`/movies/${id}`} reloadDocument>
            <img src={poster} />
            <div className="card-data">
              <h3>{title}</h3>
              <p>{genres.join(" - ")}</p>
              <p>IMDB : {imdb_rating}</p>
            </div>
          </Link>
        </div>
      );
    });
  }
  useEffect(() => {
    checkValue(searchValue);
  }, [searchValue]);
  return (
    <Style>
      <div className="search-bar">
        <span>
          <img src="../../../assets/search.svg" />
        </span>
        <input
          type="text"
          placeholder="Search ..."
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
      <div className="container">{renderFarm()}</div>
    </Style>
  );
};
export default SearchMovies;
