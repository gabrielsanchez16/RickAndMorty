import "./App.css";
import useApi from "./hooks/useApi";
import InfoLocation from "./components/InfoLocation";
import InfoCharacters from "./components/InfoCharacters";
import InputSearch from "./components/InputSearch";
import { useState } from "react";
import Pagination from "./components/Pagination";
import {BsGithub} from "react-icons/bs"

function App() {
  const [searchLocation, setSearchLocation] = useState();
  const location = useApi(searchLocation);
  const [page, setPage] = useState(1)
  
  let arrayResidents = []
  const residentsPerPage = 10;
  if(location?.residents.length < residentsPerPage){
    arrayResidents = [...location?.residents]
  }else{
    const lastResidents = page * residentsPerPage;
  arrayResidents = location?.residents.slice(lastResidents - residentsPerPage, lastResidents)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentsPerPage)
  const pagesPerBlock = 5;
  let currentBlock =  Math.ceil(page / pagesPerBlock)
  if(currentBlock * pagesPerBlock >= quantityPages){
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;i <= quantityPages ;i++){
        arrayPages.push(i)
    }
  }else{
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock +1; i <= currentBlock * pagesPerBlock  ; i++){
      arrayPages.push(i)
    }
  }

  console.log(arrayPages)

  return (
    <div className="container-global">
      <div className="container-header">
        <header></header>

        <div className="container-location">
          <InfoLocation location={location} />
        </div>
      </div>

      <InputSearch setSearchLocation={setSearchLocation} />
      <Pagination 
      arrayPages={arrayPages}
      setPage={setPage}
      quantityPages = {quantityPages}
      page = {page}
      />
      <div className="App">
        <div className="container-character">
          {arrayResidents?.map((resident) => (
            <InfoCharacters resident={resident} key={resident} />
          ))}
        </div>
      </div>
       <Pagination 
      arrayPages={arrayPages}
      setPage={setPage}
      quantityPages = {quantityPages}
      page = {page}
      />

      <footer>
        <a href="https://github.com/gabrielsanchez16" target="_blank"><span><BsGithub/></span></a>
      <h2>Gabriel sanchez</h2>
      </footer>
    </div>
  );
}

export default App;
