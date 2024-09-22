import React, { useState, useEffect } from "react";
import SearchHome from "./SearchHome";
import { Link, useParams } from "react-router-dom";
import { baseURL } from "./constant";
import Card from "./Card";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(baseURL + `/search/${searchTerm}`);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      <SearchHome />
      <div className="flex flex-wrap gap-4 m-2 p-2">
        {data &&
          data.map((job, index) => {
            return (
              <Card
                key={index}
                profile={job.profile}
                experience={job.exp}
                description={job.desc}
                technology={job.techs}
                id={job.id}
              />
            );
          })}
      </div>
      <div className={data.length == 0 ? "block" : "hidden"}>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Something's missing.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can't find the Job in the Database. You'll find lots
                to explore on the search page.{" "}
              </p>
              <Link
                to="/search"
                className="inline-flex text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
              >
                Back to Search Page
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchResults;
