import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "./constant";

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(baseURL + `/update/${id}`, {
      method: "PATCH",
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
  return <div>UpdateJob</div>;
};

export default UpdateJob;
