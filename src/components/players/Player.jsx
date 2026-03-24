import React from "react";
import Card from "./ui/Card";

const Player = ({ player }) => {
  console.log(player);

  return (
    <div>
      <Card player={player}/>
    </div>
  );
};

export default Player;
