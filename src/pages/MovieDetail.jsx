import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import commingsoon from "../assets/images/commingsoon.jpg";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = ({ title }) => {
  const params = useParams();
  const [movie, setMovie] = useState({
    genres: [],
  });

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : commingsoon;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=c9190de4f9704862610abaf0e8fe67ca`
      );
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }
    fetchMovie();
  }, []);

  const pageTitle = useTitle(movie.title);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} alt="" />
        </div>
        <div className="max-w-2xl text-grey-700 text-lg dark:text-white text-justify">
          <h1 className="text-4xl font-bold my-3">{movie.title}</h1>
          <p className=" my-4">{movie.overview}</p>

          <p className="my-7 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span
                className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
          </p>

          <div class="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm  text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span class=" text-gray-900  dark:text-white">
              {movie.vote_count}
            </span>
          </div>

          <p className="my-2">
            <span className="mr-2  font-bold">Runtime : </span>
            <span>{movie.runtime} min.</span>
          </p>
          <p className="my-2">
            <span className="mr-2  font-bold">Budegt : </span>
            <span>{movie.budget} </span>
          </p>
          <p className="my-2">
            <span className="mr-2 font-bold">Runtime : </span>
            <span>{movie.revenue} </span>
          </p>
          <p className="my-2">
            <span className="mr-2 font-bold">Runtime : </span>
            <span>{movie.release_date} </span>
          </p>
          <p className="my-2">
            <span className="mr-2   font-bold">Imdb Code : </span>
            <Link
              to={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>{movie.imdb_id} </span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};
