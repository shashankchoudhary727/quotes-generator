import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function Quote() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");

  const quotesAPI = async () => {
    let arrayOfQuotes = [];
    const data = await axios.get("https://api.quotable.io/random");
    arrayOfQuotes = data.data;
    setQuotes(arrayOfQuotes.content);
    setAuthor(arrayOfQuotes.author);
  };

  useEffect(() => {
    quotesAPI();
  }, []);

  return (
    <div className="main-box">
      <h1 className="heading">QUOTES</h1>

      <div className="box">
        <div>
          <p>{quotes}</p>
          <p>~ {author}</p>
        </div>
        <div></div>
      </div>
      <div className="quote-button">
        <button onClick={quotesAPI}>Genrate new quote</button>
      </div>
    </div>
  );
}

export default Quote;
