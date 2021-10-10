import "./App.css";
import { useState, useEffect } from "react";
import logo from "./logo.svg";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [word, setWord] = useState("");

  const [meaning, setMeaning] = useState("");

  useEffect(async () => {
    try {
      let response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      let meaningArr = await response.json();
      setMeaning(meaningArr);
    } catch (err) {
      console.log(err);
    }
  }, [word]);
  function findMeaning(event) {
    const inputWord = event.target.value;
    setSearchText(inputWord);
  }

  function searchMeaningHandler() {
    setWord(searchText);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dictionary</h1>
        <input
          onChange={findMeaning}
          value={searchText}
          style={{ padding: "1rem" }}
          placeholder="unlock the mystery"
        />
        <button id="search-btn" onClick={searchMeaningHandler}>
          Search
        </button>
        <h2>{word && `word searched: ${word}`}</h2>
        {meaning[0] &&
          meaning[0].meanings.map((el) => {
            return (
              <>
                <h2>{el.partOfSpeech}</h2>
                <p>{el.definitions[0].definition}</p>
                <p>{el.definitions[0].example}</p>
              </>
            );
          })}
      </header>
    </div>
  );
}
