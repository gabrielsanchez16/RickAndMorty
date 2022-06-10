import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const InfoCharacters = ({ resident }) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setCharacter(res.data))
      .catch((error) => console.log(error));
  }, []);

  const circlechange = {
    Alive: "green",
    Dead: "red",
    unknown: "purple",
  };
  console.log(character);

  return (
    <article className="characters">
      <div className="container-img">
        <img src={character?.image} alt="" />
        <div>
          <span className="status">
            {character?.status}{" "}
            <div
              className="Circle"
              style={{ background: circlechange[character?.status] }}
            ></div>
          </span>
        </div>
      </div>
      <h3>{character?.name}</h3>
      <div className="description">
        <ul>
          <li>
            <b>Species:</b> {character?.species}
          </li>

          <li>
            <b>Origin:</b> {character?.origin.name}
          </li>
          <li>
            <b>Appearances:</b> {character?.episode?.length}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default InfoCharacters;
