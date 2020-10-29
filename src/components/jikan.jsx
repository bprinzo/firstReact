import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default (props) => {
  const [repo, setRepo] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState([""]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setRepo(type);
  };
  useEffect(() => {
    if (repo)
      (async () => {
        const res = await axios
          .get("https://api.jikan.moe/v3/search/anime?q=" + repo + "")
          .then(function (response) {
            console.log(response.data.results);
            setData(response.data.results);
          })
          .catch(function (error) {
            console.log(error);
          });
      })();
  }, [repo]);

  return (
    <>
      <h1>Anime Search: </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={type}
          onChange={(ev) => setType(ev.target.value)}
        />
        <input type="submit" value="Search"></input>
      </form>
      {data.length > 0 ? (
        <>
          {data.map((id) => (
            <>
              <h1 key={id.mal_id}>
                <Link to={`/anime/${id.mal_id}`}>{id.title}</Link>
              </h1>
              {id.image_url && (
                <img
                  alt="imagem"
                  className="animeImage"
                  src={id.image_url}
                ></img>
              )}
            </>
          ))}
        </>
      ) : (
        <p className="nothingFound">Sorry, nothing was found</p>
      )}
    </>
  );
};
