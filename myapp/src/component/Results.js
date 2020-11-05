import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCards from "./VideoCards";
import axios from "./axios";
import requests from "./requests";

function Results() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRAted);
      console.log(request);
    }
    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCards />
      ))}
    </div>
  );
}

export default Results;
