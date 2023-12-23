import axios from "axios";
import { useEffect, useState } from "react";

function Jokes() {
  const [jokes, setJokes] = useState(""); // Empty string for initial state.
  const [loading, setLoading] = useState(false); // Boolean for loading state.

  const fetchJoke = async () => {
    setLoading(true); // Set loading to true before fetching.
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      setJokes(response.data.value);
    } catch (error) {
      console.error(error); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="main-box">
     <h1 className="heading">JOKES</h1>
      <div className="box">
        {loading ? <p>Loading...</p> : <p>{jokes}</p>}
        
      </div>
      <div className="button">
      <button onClick={fetchJoke}>Get Another Joke</button>
      </div>
    </div>
  );
}

export default Jokes;