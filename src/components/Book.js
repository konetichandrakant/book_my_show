import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Book() {
  const { movie_id } = useParams();
  const [details, setDetails] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [Tickets, setTickets] = useState(0);
  const [booked, setBooked] = useState(false);

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const inputStyle = {
    borderRadius: "10px",
    margin: "10px",
    padding: "5px",
  };

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
    <div>
      {details && !booked && (
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ ...divStyle, margin: "5px" }}>
            <span>
              <b>
                Booking for {details.show.name} at {details.show.schedule.time}
              </b>
            </span>
          </div>
          <br />
          <div style={divStyle}>
            <span>
              <b>Name : </b>
            </span>
            <span>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                style={inputStyle}
                value={name}
              />
            </span>
            <br />
          </div>
          <div style={divStyle}>
            <span>
              <b>Email : </b>
            </span>
            <span>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                style={inputStyle}
                value={email}
              />
            </span>
            <br />
          </div>
          <div style={divStyle}>
            <span>
              <b>Phone Number : </b>
            </span>
            <span>
              <input
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                type="text"
                style={inputStyle}
                value={number}
              />
            </span>
            <br />
          </div>
          <div style={{ ...divStyle, flexDirection: "row" }}>
            <span>
              <button
                onClick={() => {
                  Tickets > 0 && setTickets((p) => p - 1);
                }}
              >
                -
              </button>
            </span>
            <span style={{ marginLeft: "5px", marginRight: "5px" }}>
              {Tickets}
            </span>
            <span>
              <button
                onClick={() => {
                  Tickets === 6 &&
                    alert("can't book more than 6 tickets per user");
                  Tickets < 6 && setTickets((p) => p + 1);
                }}
              >
                +
              </button>
            </span>
          </div>
          <br />
          <div style={divStyle}>
            <span>
              <b>Total Price : </b>
              {Tickets * 150}
            </span>
          </div>
          <br />
          <div style={divStyle}>
            <span>
              <b>Note : </b> The price of each ticket is 150/- .
            </span>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <span>
              <button
                onClick={() => {
                  localStorage.setItem("name", name);
                  localStorage.setItem("mobile number", number);
                  localStorage.setItem("email ID", email);
                  setBooked(true);
                }}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                Submit
              </button>
            </span>
          </div>
        </div>
      )}
      {booked && (
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ ...divStyle, flexDirection: "row" }}>
            <span>
              <img
                src="https://i.gifer.com/7efs.gif"
                style={{ width: "100px", height: "100px" }}
              />
            </span>
            <span>Booking successful</span>
          </div>
          <div style={divStyle}>
            <span style={{ margin: "10px" }}>
              <b>Booking Details</b>
            </span>
            <span style={{ margin: "10px" }}>
              <b>Name:</b> {name}
            </span>
            <span style={{ margin: "10px" }}>
              <b>Number:</b> {number}
            </span>
            <span style={{ margin: "10px" }}>
              <b>Email:</b> {email}
            </span>
            <span style={{ margin: "10px" }}>
              <b>Movie:</b> {details.show.name}
            </span>
            <span style={{ margin: "10px" }}>
              <b>Show Time</b>: {details.show.schedule.time}
            </span>
            <span style={{ margin: "10px" }}>
              <b>No of Tickets:</b> {Tickets}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
