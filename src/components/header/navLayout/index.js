import { NavLink } from "react-router-dom";
import NavLayoutStyle from "./style";
const NavLayout = () => {
  return (
    <NavLayoutStyle>
      <NavLink to="/" className="nav-item">
        home
      </NavLink>
      <NavLink to="/genres" className="nav-item">
        gernes
      </NavLink>
    </NavLayoutStyle>
  );
};
export default NavLayout;
