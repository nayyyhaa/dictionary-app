import "./App.css";
import { useState } from "react";
import logo from "./logo.svg";
const meaningDict = {
  tranquility: "state of being calm",
  neha: "eyes"
};
const words = Object.keys(meaningDict);
export default function App() {
  const [word, setWord] = useState("");

  const [meaning, setMeaning] = useState("");
  function findMeaning(event) {
    const inputWord = event.target.value;
    setWord(inputWord);
    if (inputWord in meaningDict) {
      setMeaning(meaningDict[inputWord]);
    } else {
      setMeaning("no idea bro!");
    }
  }
  function wordClickHandler(word) {
    setMeaning(meaningDict[word]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dictionary</h1>
        <input
          onChange={findMeaning}
          value={word}
          placeholder="unlock the mystery"
        />
        <h2>{word}</h2>
        <h2>{meaning}</h2>
        <h2>
          Words I know:
          {words.map((w) => (
            <span
              onClick={() => wordClickHandler(w)}
              style={{
                cursor: "pointer",
                padding: "0.5rem"
              }}
            >
              {w}
            </span>
          ))}
        </h2>
        </header>
    </div>
  );
}
