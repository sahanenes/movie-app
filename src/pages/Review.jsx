import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const review = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  useEffect(() => {
    axios.get(review).then((res) => setDetails(res.data.results));
  }, [review]);

  return (
    <>
      {details?.map((detail, index) => {
        return (
          <div key={index}>
            <figure className="flex flex-col justify-center items-center p-8  bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  {detail.author_details.username.substring(1)}
                </h3>
                <p className="my-4 font-light">{detail.content}</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{detail.author}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Raiting: {detail.author_details.rating}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        );
      })}
      {/* <div>
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
      </div> */}
    </>
  );
};

export default Review;
