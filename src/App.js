import GlobalStyle from "./globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./pages/mainRouter";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
