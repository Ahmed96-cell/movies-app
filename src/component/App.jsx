import React, { useEffect, useState } from "react";
import axios from "axios";
import Navb from "./nav";
import Cardd from "./card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagedetiles from "./Pagedetiles";

const App = () => {
  const [state, setstate] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const data = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d9dda12b0f6bdc0595415f89846a248c&language=ar&page=1"
    );
    setstate(res.data.results);
    setpageCount(res.data.total_pages);
  };

  const pages = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d9dda12b0f6bdc0595415f89846a248c&language=ar&page=${page}`
    );
    setstate(res.data.results);
    setpageCount(res.data.total_pages);
  };

  useEffect(() => {
    data();
  }, []);
  const search = async (word) => {
    if (word === "") {
      data();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setstate(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };
  return (
    <React.Fragment>
      <Navb search={search} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Cardd movies={state} pages={pages} pageCount={pageCount} />
            }
          />
          <Route path="/movie/:id" element={<Pagedetiles movies={state} />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
