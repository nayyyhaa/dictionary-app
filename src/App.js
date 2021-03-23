import "./styles.css";
import { useState } from "react";
const meaningDict = {
  tranquility: "state of being calm",
  neha: "eyes"
};
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
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <input onChange={findMeaning} value={word} />
      <h2>{word}</h2>
      <h2>{meaning}</h2>
    </div>
  );
}
