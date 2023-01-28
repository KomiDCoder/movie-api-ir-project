import { NavLink } from "react-router-dom";
import SearchMovies from "../../searchMovies";
import NavLayoutStyle from "./style";
const NavLayout = () => {
  return (
    <NavLayoutStyle>
      <nav>
        <NavLink to="/" className="nav-item">
          home
        </NavLink>
        <NavLink to="/genres" className="nav-item">
          gernes
        </NavLink>
      </nav>
      <div className="search-section">
        <SearchMovies />
      </div>
    </NavLayoutStyle>
  );
};
export default NavLayout;
