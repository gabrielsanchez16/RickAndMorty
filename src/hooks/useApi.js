import { useEffect, useState } from 'react'
import axios from 'axios'

const useApi = () => {

    const [location, setLocation] = useState()



    useEffect(() => {
        const idRamdom = Math.ceil(Math.random()*126)
        const URL = `https://rickandmortyapi.com/api/location/${idRamdom}`
        axios.get(URL)
        .then(res=> setLocation(res.data))
        .catch(error => console.log(error))

    }, [])
    


  return location
}

export default useApi