import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { imdbID } = useParams();
  console.log(imdbID);
  return <h1>Details of </h1>;
};

export default MovieDetails;
