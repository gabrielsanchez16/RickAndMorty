import "./App.css";
import useApi from "./hooks/useApi";
import InfoLocation from "./components/InfoLocation";
import InfoCharacters from "./components/InfoCharacters";

function App() {
  const location = useApi();
  console.log(location);

  return (
    <div className="container-global">
      <div className="container-header">
        <header></header>
        <div className="container-location">
          <InfoLocation location={location} />
        </div>
      </div>
      
      
        <form action="">
          <input type="text" />
          <button>Submit</button>
        </form>
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
