import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/posts.css";

export default (props) => {
  const [data, setData] = useState([""]);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    axios
      .get(`http://localhost:3001/api/post/find/${type}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [type]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setType(event);
  };

  return (
    <>
      <div className="posts-search">
        <h1>Search for a post!</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Title"
            type="text"
            value={type}
            required
            onChange={(event) => setType(event.target.value)}
          />
        </form>
      </div>
      {data.length > 0 ? (
        <div className="upload-page">
          {data.map((data) => (
            <div className="upload-container zoom">
              <h1 key={data.title} className="upload-title">
                {data.title}
              </h1>
              {data.image && (
                <img className="upload-image" src={data.image.url} />
              )}
              <p className="upload-text">{data.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="nothingFound">Sorry, nothing was found</p>
      )}
    </>
  );
};
