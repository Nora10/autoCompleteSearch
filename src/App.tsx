import React, { useState } from "react";
import "./App.css";
import Autocomplete from "./autocomplete-search";

function App() {
  // dynamic list of words:
  const [words] = useState([
    "apple",
    "orange",
    "grape",
    "pear",
    "melon",
    "kiwi",
    "watermelon",
    "blueberry",
    "cherry",
    "Abiu",
    "Açaí",
    "Acerola",
    "Akebi",
    "Ackee",
    "African Cherry Orange",
    "American Mayapple",
    "Apricot",
    "Aratiles",
    "Araza",
    "Avocado",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Black sapote",
    "Blueberry",
    "Boysenberry",
  ]);

  // IF USING API TO FETCH WORDS
  // const [words, setWords] = useState<string[]>([]);

  // useEffect(() => {
  //   const fetchWords = async () => {
  //     const response = await fetch("https://api.example.com/words");
  //     const data = await response.json();
  //     setWords(data.words); // Assuming the API returns an array of words
  //   };

  //   fetchWords();
  // }, []); // Empty dependency array to fetch only once when component mounts

  return (
    <div className="App">
      <div className="App-header">
        <p>Autocomplete search with react.</p>
        <div>
          <Autocomplete wordsTyped={words} />
        </div>
      </div>
    </div>
  );
}

export default App;
