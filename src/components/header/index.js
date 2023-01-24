import { Outlet } from "react-router-dom";
import NavLayout from "./navLayout";
import HeaderStyle from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <NavLayout />
      <main>
        <Outlet />
      </main>
    </HeaderStyle>
  );
};
export default Header;
