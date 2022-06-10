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
      <div className='container-img'>
        <img src={character?.image} alt="" />
        <div>
          <span className='status'><b>Status:</b> {character?.status}</span>
        </div>
      </div>
        <h3>{character?.name}</h3>
        <div className='description'>
            <ul>
                <li><b>Species:</b> {character?.species}</li>
                
                <li><b>Origin:</b> {character?.origin.name}</li>
                <li><b>Appearances:</b> {character?.episode?.length}</li>
            </ul>
        </div>
    </article>
  )
}

export default InfoCharacters