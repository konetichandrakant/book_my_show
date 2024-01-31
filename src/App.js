import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./components/Summary";
import Book from "./components/Book";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Movie />
              </>
            }
          ></Route>
          <Route
            exact
            path="/movie/:movie_id"
            element={
              <>
                <Navbar />
                <Summary />
              </>
            }
          ></Route>
          <Route
            exact
            path="/book/:movie_id"
            element={
              <>
                <Navbar />
                <Book />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;