import React from 'react'
import { useEffect, useState } from 'react'


/*========  C O M P O N E N T E S   /*========*/
import { Filtro } from '../../UI/Filtro/Filtro'
import { Personajes } from '../../UI/Personajes/Personajes'

export const Main = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        console.log(data.results);
        setPersonajes(data.results);
    }
    fetchData();
    }, [])

    // /*========  F  I  L  T  R  O   /*========*/
    const [inputText,setInputText] = useState('');

    const personjesFiltrados = personajes.filter((personaje) => 
    personaje.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()))

    return (
        <div>
            <Filtro inputText={inputText} setInputText={setInputText} />
            <Personajes personajes={personjesFiltrados} />
        </div>
    )
}
