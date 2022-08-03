import React from 'react'


export const Cards = ({personaje} ) => {
    return (
        <div class="contanerCard">
            <div>
                <img src={personaje.image} alt=""/>
            </div>
            <div class="info">
                <h4>{personaje.name}</h4>
                <span class="status">{personaje.species}</span>
                <p class="live">{personaje.status}</p>
                <h5>{personaje.gender}</h5>
            </div>
        </div>
    )
}
