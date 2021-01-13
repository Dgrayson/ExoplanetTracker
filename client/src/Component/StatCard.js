import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function StatCard(cardType){

    function generateCard(){
        if(cardType === "numPlanets")
            return <div>numPlanets</div>;
    }

    return <div class="stat-card">
        {generateCard}
    </div>
}

export default StatCard;