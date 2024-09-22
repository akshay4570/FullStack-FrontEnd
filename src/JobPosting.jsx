import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "./constant";
import { useNavigate } from "react-router-dom";

const JobPosting = () => {
  const [profile, setProfile] = useState("");
  const [exp, setExp] = useState(0);
  const [tech, setTech] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const handleJobPost = (e) => {
    e.preventDefault();
    let techList = tech.split(",");
    console.log("profile ", profile);
    console.log("exp ", exp);
    console.log("tech ", techList);
    console.log("desc ", desc);
    const postBody = {
      profile: profile,
      desc: desc,
      exp: exp,
      techs: techList,
    };
    fetch(baseURL + `/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((res) => {
        console.log(res);
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
    navigate("/");
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Job Listing
          </h2>
          <form onSubmit={handleJobPost}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Profile
                </label>
                <input
                  type="text"
                  name="profile"
                  id="profile"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Profile"
                  required={true}
                  value={profile}
                  onChange={(e) => {
                    setProfile(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Experience
                </label>
                <input
                  type="number"
                  name="exp"
                  id="exp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Experience"
                  required={true}
                  value={exp}
                  onChange={(e) => {
                    setExp(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Technology
                </label>
                <input
                  type="text"
                  name="techs"
                  id="techs"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Technologies comma seperated"
                  required={true}
                  value={tech}
                  onChange={(e) => {
                    setTech(e.target.value);
                  }}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <textarea
                  id="desc"
                  name="desc"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              + Add Job
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default JobPosting;
