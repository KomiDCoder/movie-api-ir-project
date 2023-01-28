import styled from "styled-components";
const LoadingPageStyle = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 200px;
  height: 200px;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10%;
  color: white;
  position: relative;
  z-index: 100;
  .loading-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 16px solid #f3f3f3;
    border-top: 16px solid blue;
    animation: spin 2s linear infinite;
  }
  .loading-text {
    position: absolute;
    right: 60px;
    top: 90px;
    z-index: 4;
  }
`;
export default LoadingPageStyle;
