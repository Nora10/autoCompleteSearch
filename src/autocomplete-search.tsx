import React, { useState } from "react";

const Autocomplete = ({ wordsTyped = [] }: { wordsTyped: string[] }) => {
  const [wordToCheck, setWordToCheck] = useState("");
  const [suggestedWords, setSuggestedWords] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setWordToCheck(target);
    setSuggestedWords(
      wordsTyped.filter((word) =>
        word.toLowerCase().includes(target.toLowerCase())
      )
    );
  };

  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="Search.."
        value={wordToCheck}
        onChange={handleInputChange}
        className="textbox"
      />
      <ul className="suggestionList">
        {suggestedWords.length > 0 ?
            suggestedWords.map((word, index) => (
            <li className="suggestionItem" key={index}>{word}</li>
        )): <div className="noSuggestions">No suggestions available.</div>}
      </ul>
    </div>
  );
};

export default Autocomplete;
