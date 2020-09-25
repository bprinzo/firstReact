import React, { useEffect, useState } from "react";
import axios from "axios";

export default ({ match }) => {
  useEffect(() => {
    axiosItem();
  }, []);

  const [data, setData] = useState([]);

  const axiosItem = async () => {
    const axiosItem = await axios
      .get(`https://api.jikan.moe/v3/anime/${match.params.id}`)
      .then(function (data) {
        setData(data.data);
      });
  };

  return (
    <div className="body">
      <h2 className="animeTitle">{data.title}</h2>
      <img alt="imagem" className="animeImage" src={data.image_url}></img>
      <p className="animeSynopsis">{data.synopsis}</p>
    </div>
  );
};
