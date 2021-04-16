import "./App.css";
import { useState } from "react";
import logo from "./logo.svg";
import someJson from './dictionary';
 const meaningDict = someJson;
//{
//   tranquility: "state of being calm",
//   neha: "eyes",
//   feel: "me",
//   me: "feel"
// };
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
      setMeaning("sorry! we don't have that in our database.");
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
        <h2 style={{backgroundColor: "white", color:"black", padding: "1rem", fontFamily:"sans-serif", fontSize:"20px", margin:"2rem"}}>{meaning}</h2>
        {/* <h2>
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
        </h2> */}
        </header>
    </div>
  );
}
