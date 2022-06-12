import React from 'react'
import { useState } from 'react'
import { AiOutlineFileSearch, AiFillAlert } from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'


const InputSearch = ({setSearchLocation}) => {
   
    const [alert, setAlert] = useState()
    const searchWord = e => {
        e.preventDefault()
        if(e.target.children[0].value > 126 || e.target.children[0].value < 1 ){
             setAlert("Remember there are only 126 worlds")

             return;

        }

        setAlert("")
       setSearchLocation(e.target.children[0].value)
    }
  return (
    <form onSubmit={searchWord}>
        {
        alert && 
        <article className='container-alert'>
            <div className='alert'>
                <h3 ><AiFillAlert />Alert </h3>
                <p>{alert}</p>
            </div>
        </article>
        }
        <input type="number" placeholder='type a location from 1-126' />
        <button><BsSearch/></button>
    </form>
  )
}

export default InputSearch