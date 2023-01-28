import { useEffect, useState } from "react";
import api from "../../helpers/api";
import GenreNavStyle from "./style";
import { Link } from "react-router-dom";
import LoadingPage from "../../pages/loadingPage";

const GenreNav = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gernes, setGenres] = useState([]);
  async function getGenresApi() {
    const res = await api.get("/genres");
    setGenres(res.data);
  }
  function renderGenres() {
    return gernes.map((item) => {
      return (
        <Link
          className="nav-item"
          to={`/genres/${item.id}`}
          key={item.id}
          state={item.name}
        >
          {item.name}
        </Link>
      );
    });
  }
  useEffect(() => {
    setIsLoading(true);
    getGenresApi();
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <GenreNavStyle>
          <div className="genre-wrapper">{renderGenres()}</div>
        </GenreNavStyle>
      )}
    </>
  );
};
export default GenreNav;
