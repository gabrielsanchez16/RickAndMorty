import { useEffect, useState } from 'react'
import axios from 'axios'

const useApi = searchLocation => {

    const [location, setLocation] = useState()



    useEffect(() => {
      let locationNumber
      if(searchLocation){
          locationNumber = searchLocation
      }else{
          locationNumber = Math.ceil(Math.random()*126)
      }
        
        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
        axios.get(URL)
        .then(res=> setLocation(res.data))
        .catch(error => console.log(error))

    }, [searchLocation])
    


  return location
}

export default useApi