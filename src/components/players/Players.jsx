import React, { use, useState } from "react";
import Player from "./Player";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ fetchPlayersData }) => {
  const players = use(fetchPlayersData);

  // console.log(playersData.length);

  const [selectedType , setSelectedType] = useState("available")


  return (
    <div className="container mx-auto space-y-10">

        <div className="flex justify-between items-center my-10">

            {
                
                selectedType ===  "available" ? <h1 className="font-bold text-2xl">Available Players</h1> : <h1 className="font-bold text-2xl">Selected Players</h1>
                
            }

            <div className="flex items-center">
                <button onClick={() => setSelectedType("available")} className={`btn rounded-lg rounded-r-none   ${selectedType === "available" ? " bg-[#E7FE29] text-black" : "text-gray-400"} `}>Available</button>
                <button onClick={() => setSelectedType("selected")} className={`btn rounded-lg rounded-l-none  ${selectedType === "selected" ? " bg-[#E7FE29] text-black" : "text-gray-400"} `}>Selected</button>
            </div>
        </div>


        {
            selectedType === "available" ? <Player players={players} /> : <SelectedPlayers/>
        }
      
      

    </div>
  );
};

export default Players;
