import React from 'react'
import { Cards } from '../Cards/Cards'


export const Personajes = ({personajes}) => {
    
    return (
        <div className='MainCards'>
            {personajes.map(personaje =>  
                <Cards 
                    key={personaje.id}  
                    personaje={personaje} 
                /> 
            )}
        </div>
    )
}

