import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Summary() {
  const { movie_id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((resp) => {
      const data = resp.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].show.id === Number.parseInt(movie_id)) {
          setDetails(data[i]);
          break;
        }
      }
    });
  }, []);

  return (
    <div style={{ marginLeft: "7%", marginRight: "7%" }}>
      {details && (
        <div className="card">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "1%", marginTop: "1%" }}>
            <img
              src={
                !details.show.image || !details.show.image.original
                  ? "https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA="
                  : details.show.image.original
              }
              className="card-img-top"
              style={{ width: "200px", height: "200px" }}
              alt="..."
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "1%" }}>
            <h5 className="card-name">
              <b>Title : </b>
              {details.show.name}{" "}
            </h5>
          </div>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: "10%", marginRight: "10%" }}>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: details.show.summary }}
            ></p>
          </div>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "1%" }}>
            <p className="card-text">
              <b>Run Time : </b>
              {details.show.runtime ? details.show.runtime : "Unknown"}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "1%" }}>
            <p className="card-text">
              <b>Score : </b>
              {!(!details.score)
                ? details.score
                : "Unknown"}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "1%" }}>
            <p className="card-text">
              <b>Language : </b>
              {!details.show || !details.show.language
                ? "Unknown"
                : details.show.language}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "1%" }}>
            <a
              rel="noreferrer"
              href={`/book/${movie_id}`}
              className="btn btn-sm btn-dark"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Summary;
