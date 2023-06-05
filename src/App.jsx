import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieBox from "./MovieBox.jsx";

//////// NOT TO USE SINCE YOU ARE USING VITE AS A BUNDLER 
// import process from "process";
// import Search from "./Search";
// import dotenv from "dotenv";
// dotenv.config();
// const Dotenv = require('dotenv-webpack');
// import usefetch from "./useFetch"; 
///////// ****************************************************
const API_KEY = import.meta.env.VITE_API_KEY;
const API_ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
// console.log(API_ENDPOINT);

function App() {

  const [movies, setMovie] = useState([])
  const [q, setQ] = useState("");
  const [searchParam] = useState(['title']);



  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(API_ENDPOINT)
  //     const res = await response.json();
  //     console.log(res);
  //     setMovie(res.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  /* GET request using AXIOS */

  const fetchData = async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      // console.log(response);
      // const res = response.data;
      // console.log(res);
      setMovie(response.data.results);
    } catch (error) {
       console.log(error)
    }
  }


  useEffect(() => {
    fetchData();
  }, []);




  function search(movies) {
    return movies.filter((movie) => {
      return searchParam.some((newMovie) => {
        return (
          movie[newMovie]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        )
      })
    })
  }

  return (
    <div className="md:mx-10 my-20">
     <h1 className="text-3xl text-center md:text-left"> Movies DB</h1>
      <form className="mt-12 relative">
        <input
        className="h-14 md:w-[40%] md:left-0 left-[4rem] px-4 absolute"
          type="search"
          name="search-form"
          id="search-form"
          placeholder="Search for..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </form>
      <div className="card mt-36">
        {search(movies).map((movie) => <MovieBox key={movie.id} {...movie} />)}
      </div>
    </div>

  );
};

export default App;
