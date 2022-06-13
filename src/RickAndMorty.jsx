import "./App.css";
import useApi from "./hooks/useApi";
import InfoLocation from "./components/InfoLocation";
import InfoCharacters from "./components/InfoCharacters";
import InputSearch from "./components/InputSearch";
import { useState } from "react";

function App() {
  const [searchLocation, setSearchLocation] = useState();
  const location = useApi(searchLocation);

  return (
    <div className="container-global">
      <div className="container-header">
        <header></header>

        <div className="container-location">
          <InfoLocation location={location} />
        </div>
      </div>

      <InputSearch setSearchLocation={setSearchLocation} />
      <div className="App">
        <div className="container-character">
          {location?.residents?.map((resident) => (
            <InfoCharacters resident={resident} key={resident} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
