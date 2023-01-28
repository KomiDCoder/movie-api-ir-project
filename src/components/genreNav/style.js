import styled from "styled-components";
const GenreNavStyle = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 100px;
  width: 80%;
  font-size: 18px;
  .genre-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 10px;
  }
  .nav-item {
    background: #f3f3f3;
    padding: 10px;
    border-radius: 12px;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    width: 30%;
    padding: 22px;
    color: black;
    transition: all 0.3s ease-in;
    &.active {
      background: #008cba;
    }
    &:hover {
      background: #979797;
      color: #fff;
      opacity: 0.8;
    }
  }
`;
export default GenreNavStyle;
