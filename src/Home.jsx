import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/jobs`);
      const json = await response.json();
      setJobs(json);
      console.log("first", json);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap gap-4 bg-gray-700 w-full">
      {jobs &&
        jobs.map((job, index) => {
          return (
            <Card
              profile={job.profile}
              experience={job.exp}
              description={job.desc}
              technology={job.techs}
              id={job.id}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default Home;
