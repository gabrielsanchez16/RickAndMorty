import React from 'react'

const InfoLocation = ({location}) => {

  console.log(location)
  return (
    <article className='location'>
        <h2>{location?.name}</h2>
        <ul>
            <li>Type: {location?.type}</li>
            <li>Dimension: {location?.dimension}</li>
            <li>Population: {location?.residents?.length}</li>
            <li>Wordl: {location?.id}</li>
            
        </ul>
    </article>
  )
}

export default InfoLocation