import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "./constant";

const DeleteJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(baseURL + `/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
    navigate("/");
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default DeleteJob;
