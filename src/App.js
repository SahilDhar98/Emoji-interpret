import React from "react";
import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "⛰️ ": "Mountain",
  "🧭": "Compass",
  "🔪": "Knife",
  "🗺️": "Map",
  "🧨": "Firecracker",
  "🐺": "Wolf",
  "🐅": "Tiger",
  "🐃": "water Buffalo",
  "🐘": "Elephant",
  "🐻": "Bear"
};
var txtColor = "Maroon";
export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiinput(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      console.log("we dont have that emoji in our data base");
    }
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  // function emojiclickHandler(emoji){
  //   var meaning = emojiDictionary[emoji];
  //   setMeaning(meaning);

  var emojis = Object.keys(emojiDictionary);

  return (
    <div className="App">
      <h1 style={{ color: txtColor }}>Emoji Interpreter ! </h1>
      <input
        style={{ padding: "1rem", display: "block", margin: "auto" }}
        onChange={emojiinput}
      ></input>
      <h2> {meaning} </h2>

      <h3> emojis we know </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => clickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
