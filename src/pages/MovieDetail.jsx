import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState("");
  const [videoKey, setVideoKey] = useState("");
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);
  const {
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
  } = movieDetails;

  return (
    <>
      <div className="container px-10 mx-auto py-5">
        <h1 className="text-center text-white text-3xl">{title}</h1>
        {videoKey && <VideoSection videoKey={videoKey} />}
        <div className="container flex justify-center px-10">
          <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">
            <img
              className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={poster_path ? baseImageUrl + poster_path : defaultImage}
              alt="poster"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Overview
                </h5>
                <p className="text-gray-700 text-base mb-4">{overview}</p>
              </div>
              <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
                  {"Release Date : " + release_date}
                </li>
                <li className="px-6 py-2 border-b border-gray-400 w-full">
                  {"Rate : " + vote_average}
                </li>
                <li className="px-6 py-2 border-b border-gray-400 w-full">
                  {"Total Vote : " + vote_count}
                </li>
                <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
                  <Link
                    to={-1}
                    className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                  >
                    Go Back
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <form>
            <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a comment..."
                  required
                  defaultValue={""}
                />
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Post comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
