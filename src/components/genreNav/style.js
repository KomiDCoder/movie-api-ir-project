import styled from "styled-components";
const GenreNavStyle = styled.div`
  display: flex;
  box-shadow: -2px -2px black;
  flex-wrap: wrap;
  z-index: 2;
  width: 100%;
  background: #f3f3f3;
  font-size: 18px;
  .nav-item {
    &.active {
      background: #008cba;
    }
  }
  a {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px;
    color: black;
    &:hover {
      background: #979797;
      color: whitesmoke;
      opacity: 0.8;
    }
  }
`;
export default GenreNavStyle;
