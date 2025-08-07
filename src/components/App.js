import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState(fruits); // ✅ initial render

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (input.trim() === "") {
        setSuggestions(fruits); // ✅ show all on empty
      } else {
        const filtered = fruits.filter((fruit) =>
          fruit.toLowerCase().startsWith(input.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [input]);

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        placeholder=""
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
