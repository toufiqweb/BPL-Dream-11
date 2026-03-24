import React from "react";
import Card from "../ui/Card";

const Player = ({ players }) => {



  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {players.map((player, index) => (
        <Card key={index} player={player} />
      ))}
    </div>
  );
};

export default Player;
