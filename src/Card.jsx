/* eslint-disable react/prop-types */
import React from "react";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Card = ({ profile, experience, description, technology, id }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    navigate(`/delete/${id}`);
  };
  const handleUpdate = () => {
    navigate(`/update/${id}`);
  };
  return (
    <div className="w-1/4 h-96 block p-6 m-6 shadow-lg bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {profile}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {experience} yrs
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
        {technology &&
          technology.map((tech, index) => {
            return (
              <b key={index}>
                {tech} <span className="text4xl">·</span>{" "}
              </b>
            );
          })}
      </p>
      <div className="flex flex-wrap gap-2 justify-center absolute bottom-10">
        <button
          className="bg-blue-700 flex flex-wrap p-2 text-white rounded-lg mt-auto"
          onClick={handleUpdate}
        >
          <RxUpdate size={30} />
          Update
        </button>
        <button
          className="bg-blue-700 flex flex-wrap p-2 text-white rounded-lg mt-auto"
          onClick={handleDelete}
        >
          <MdDelete size={30} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
