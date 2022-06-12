import React from 'react'
import { GiWorld, } from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io'
import {TbDimensions} from 'react-icons/tb'
import {SiSpacemacs} from 'react-icons/si'


const InfoLocation = ({location}) => {

  console.log(location)
  return (
    <article className='location'>
        <h2>{location?.name}</h2>
        <ul>
            <li><SiSpacemacs/> Type: {location?.type}</li>
            <li><TbDimensions/>Dimension: {location?.dimension}</li>
            <li><IoIosPeople/>Population: {location?.residents?.length}</li>
            <li><GiWorld/>World: {location?.id}</li>
            
        </ul>
    </article>
  )
}

export default InfoLocation