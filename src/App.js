import React from "react";
import "./styles.css";
import { useState } from "react";

const travel = {
  adventure: [
    { name: "Ladakh", rating: "4/5" },
    { name: "Kedarnath", rating: "3.5/5" }
  ],

  chill: [
    {
      name: "Goa",
      rating: "5/5"
    },
    {
      name: "Mumbai",
      rating: "4.5/5"
    }
  ],
  nature: [
    {
      name: "Himachal Pradesh",
      rating: "3.5/5"
    },
    {
      name: "Uttrakhand",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("adventure");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> travel Guide </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite destinations. Select a genre to enjoy your journey{" "}
      </p>

      <div>
        {Object.keys(travel).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travel[selectedGenre].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
