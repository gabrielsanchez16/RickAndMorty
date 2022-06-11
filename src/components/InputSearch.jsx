import React from 'react'
import { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {
   
    const [alert, setAlert] = useState()
    const searchWord = e => {
        e.preventDefault()
        if(e.target.children[0].value > 126){
             setAlert("Recuerda que solo hay 126 Mundos")

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
                <h2 >OJO</h2>
                <p>{alert}</p>
            </div>
        </article>
        }
        <input type="number" />
        <button>Search</button>
    </form>
  )
}

export default InputSearch