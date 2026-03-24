import React, { use } from 'react';
import Player from './Player';

const Players = ({fetchPlayersData}) => {

    const players = use(fetchPlayersData)

    // console.log(playersData.length);
    
    return (
        <div className='container mx-auto mt-20 grid grid-cols-3 gap-10'>
            {
                players.map((player , index) => <Player key={index} player = {player}></Player>)
            }
        </div>
    );
};

export default Players;