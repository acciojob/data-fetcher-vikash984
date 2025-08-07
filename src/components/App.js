import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState(fruits); // ✅ start with all

  useEffect(() => {
    // ✅ No timeout
    if (input.trim() === "") {
      setSuggestions(fruits);
    } else {
      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [input]);

  return (
    <div id="main">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {suggestions.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
