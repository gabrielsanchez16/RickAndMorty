import axios from "axios";
import { useEffect, useState } from "react";

const useCharacter = (resident) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setCharacter(res.data))
      .catch((error) => console.log(error));
  }, []);

  return character;
};

export default useCharacter;
