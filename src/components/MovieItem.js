import React from "react";
import { useNavigate } from "react-router-dom";

const NewsItem = (props) => {
  let { name, network, imageUrl, id } = props;

  const navigate = useNavigate();

  return (
    <div
      className="my-3"
      onClick={() => {
        navigate(`movie/${id}`);
      }}
      style={{cursor:"pointer"}}
    >
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {network} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA="
              : imageUrl
          }
          className="card-img-top"
          style={{ width: "200px", height: "200px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-name">{name} </h5>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
