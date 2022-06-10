import React from 'react'

const InfoLocation = ({location}) => {
  return (
    <article className='location'>
        <h2>{location?.name}</h2>
        <ul>
            <li>Type: {location?.type}</li>
            <li>Dimension: {location?.dimension}</li>
            <li>Population: {location?.residents?.length}</li>
            
        </ul>
    </article>
  )
}

export default InfoLocation