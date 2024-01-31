import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";

const Movie = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((resp) => {
      setArticles(resp.data);
    });
  };

  useEffect(() => {
    document.title = "Book My Show";
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col md-4">
              <MovieItem
                name={element.show.name ? element.show.name : ""}
                network={
                  !(
                    element.show.network === null ||
                    !element.show.network.name
                  )
                    ? element.show.network.name
                    : "Unknown"
                }
                imageUrl={
                  !(
                    element.show.image === null ||
                    !element.show.image.original
                  )
                    ? element.show.image.original
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1200px-HBO_logo.svg.png"
                }
                id={element.show.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
