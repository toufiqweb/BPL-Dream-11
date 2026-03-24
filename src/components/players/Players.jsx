import React, { use } from 'react';

const Players = ({fetchPlayersData}) => {

    const playersData = use(fetchPlayersData)

    console.log(playersData.length);
    
    return (
        <div>
            
        </div>
    );
};

export default Players;