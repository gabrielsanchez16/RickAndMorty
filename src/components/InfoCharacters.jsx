import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {
  GiAlienBug,
  GiPerson,
  GiSpaceSuit,
  GiSittingDog,
  GiMinotaur,
} from "react-icons/gi";
import { SiGooglemaps } from "react-icons/si";
import { TbCheckupList } from "react-icons/tb";
import useCharacter from "../hooks/useCharacter";

const InfoCharacters = ({ resident }) => {
  const character = useCharacter(resident);

  const circlechange = {
    Alive: "green",
    Dead: "red",
    unknown: "purple",
  };

  const changeSpecie = {
    Alien: <GiAlienBug />,
    Human: <GiPerson />,
    Humanoid: <GiSpaceSuit />,
    Animal: <GiSittingDog />,
    'Mythological Creature': <GiMinotaur />,
  };

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
            <b>{changeSpecie[character?.species]}Species:</b>{" "}
            {character?.species}
          </li>

          <li>
            <b>
              <SiGooglemaps />
              Origin:
            </b>{" "}
            {character?.origin.name}
          </li>
          <li>
            <b>
              <TbCheckupList />
              Appearances:
            </b>{" "}
            {character?.episode?.length}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default InfoCharacters;
