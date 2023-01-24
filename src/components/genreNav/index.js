import { useEffect, useState } from "react";
import api from "../../helpers/api";
import GenreNavStyle from "./style";
import { Link, Outlet } from "react-router-dom";

const GenreNav = () => {
  const [gernes, setGenres] = useState([]);
  async function getGenresApi() {
    const res = await api.get("/genres");
    setGenres(res.data);
  }
  function renderGenres() {
    return gernes.map((item) => {
      return (
        <Link className="nav-item" to="/" key={item.id}>
          {item.name}
        </Link>
      );
    });
  }
  useEffect(() => {
    getGenresApi();
  }, []);
  return (
    <>
      <GenreNavStyle>{renderGenres()}</GenreNavStyle>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default GenreNav;
