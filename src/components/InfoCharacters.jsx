import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


const InfoCharacters = ({resident}) => {

    const [character, setCharacter] = useState()

    useEffect(() => {
     axios.get(resident)
     .then(res => setCharacter(res.data))
     .catch(error => console.log(error))
    }, [])
    
    console.log(character)

  return (
    <article className='characters'>
        <img src={character?.image} alt="" />
        <h3>{character?.name}</h3>
        <div className='description'>
            <ul>
                <li>Species: {character?.species}</li>
                <li>Status: {character?.status}</li>
                <li>Origin: {character?.origin.name}</li>
                <li>Appearances: {character?.episode?.length}</li>
            </ul>
        </div>
    </article>
  )
}

export default InfoCharacters