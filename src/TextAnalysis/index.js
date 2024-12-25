import React, { useState, useEffect } from "react";
import "./index.css";

const TextAnalysis = () => {
  const [inputText, setInputText] = useState("");
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const getUniqueWords = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };
  const getCharacterCount = (text) => {
    return (text.match(/[a-zA-Z0-9]/g) || []).length;
  };
  useEffect(() => {
    setUniqueWordCount(getUniqueWords(inputText));
    setCharCount(getCharacterCount(inputText));
  }, [inputText]);
  const handleReplaceAll = () => {
    const newText = inputText.replaceAll(searchString, replaceString);
    setInputText(newText);
  };

  return (
    <div className="app">
      <h1>Real-Time Text Analysis</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your text here..."
      />
      <div className="stats">
        <p>Unique Word Count: {uniqueWordCount}</p>
        <p>Character Count (Excluding Spaces and Punctuation): {charCount}</p>
      </div>
      <div className="string-replace">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="String to search"
        />
        <input
          type="text"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder="String to replace with"
        />
        <button onClick={handleReplaceAll}>Replace All</button>
      </div>
    </div>
  );
};

export default TextAnalysis;
