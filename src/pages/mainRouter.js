import { createBrowserRouter } from "react-router-dom";
import GenrePage from "./genres";
import Header from "../components/header";
import MainPage from "./mainPage";
import MovieSinglePage from "./movieSinglePage";
import GenreNav from "../components/genreNav";
import NotFoundPage from "./notFoundPage";
import LoadingPage from "./loadingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/genres",
        element: <GenreNav />,
        children: [
          {
            index: true,
            element: <GenrePage />,
          },
        ],
      },

      {
        path: "/movies/:id",
        element: <MovieSinglePage />,
      },
      {
        path: "genres/:mm",
        element: <LoadingPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
export default router;
