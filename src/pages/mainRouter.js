import { createBrowserRouter } from "react-router-dom";
import Header from "../components/header";
import MainPage from "./mainPage";
import MovieSinglePage from "./movieSinglePage";
import GenreNav from "../components/genreNav";
import NotFoundPage from "./notFoundPage";
import GenreMoviesList from "../components/genreMoviesList";
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
      },

      {
        path: "/movies/:id",
        element: <MovieSinglePage />,
      },
      {
        path: "genres/:id",
        element: <GenreMoviesList />,
      },
      {
        path: "/test",
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
