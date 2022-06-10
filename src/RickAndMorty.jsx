import "./App.css";
import useApi from "./hooks/useApi";
import InfoLocation from "./components/InfoLocation";
import InfoCharacters from "./components/InfoCharacters";



function App() {
  const location = useApi()
  console.log(location)
  
  return (
    <div className="container-global">
      <header></header>
      <form action="">
        <input type="text" />
        <button>Submit</button>
      </form>
      <div className="App">
        <InfoLocation
          location = {location}
        />
      
        <div className="container-character">
        {location?.residents?.map(resident => (
          
          <InfoCharacters
          resident={resident}
          key={resident}
          />
        ))}
        </div>
        
      </div>
    </div>
  );
}

export default App;
