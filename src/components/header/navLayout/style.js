import styled from "styled-components";
const NavLayoutStyle = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 2;
  width: 100%;
  background: #f3f3f3;
  font-size: 20px;
  gap: 120px;
  nav {
    width: 30%;
    display: flex;
  }
  .nav-item {
    &.active {
      background: #008cba;
    }
  }
  a {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    padding: 20px;
    color: black;
    &:hover {
      background: #979797;
      color: whitesmoke;
      opacity: 0.8;
    }
  }
`;
export default NavLayoutStyle;
