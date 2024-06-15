import { Routes, Route } from "react-router-dom";
import { MovieList, PageNotFound, Search, MovieDetail } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route
          path="/search"
          element={
            <Search apiPath="search/movie?api_key=c9190de4f9704862610abaf0e8fe67ca&{movie_name}" />
          }
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcomming" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
