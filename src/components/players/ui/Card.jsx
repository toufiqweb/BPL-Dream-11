import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={player.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <FaUser />
          <h2 className="card-title">{player.name}</h2>
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <FaFlag />
            <p>{player.country}</p>
          </div>
          <button className="btn">{player.role}</button>
        </div>

        <div className="divider"></div>

        <p className="font-semibold ">Rating ({player.rating})</p>

        <div className="flex items-center justify-between ">
          <p>{player.battingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>

        <div className="flex items-center justify-between ">
          <p className="font-bold">Price: ${player.price} </p>
          <button className="btn ">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
