import react, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const clearText = () => {
    setText("");
  };

  const saveText = () => {
    localStorage.setItem("note", JSON.stringify(text));
    setText("");
  };

  // useEffect(() => {
  //   const data = localStorage.getItem("note", text);
  //   setText(data);
  // }, [text]);

  window.addEventListener("load", function () {
    const data = localStorage.getItem("note", text);
    setText(data);
    console.log(data);
  });

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              onChange={(e) => setText(e.target.value)}
              className="textarea is-large"
              placeholder="Notes..."
              value={text}
            />
          </div>
        </div>
        <button
          onClick={saveText}
          className="button is-large is-primary is-active"
        >
          Save
        </button>
        <button onClick={clearText} className="button is-large">
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
