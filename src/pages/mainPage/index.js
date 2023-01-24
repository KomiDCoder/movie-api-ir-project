import MovieList from "../../components/movieList";
const MainPage = () => {
  return (
    <>
      <MovieList api_page="1" byType="movies" />
      <MovieList api_page="2" byType="movies" />
    </>
  );
};

export default MainPage;
