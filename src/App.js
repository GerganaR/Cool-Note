import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState("");

  const inputTextHandler = (e) => {
    setNotes(e.target.value);
    console.log(notes);
  };

  const saveToLocal = () => {
    localStorage.setItem("note", notes);
  };

  const clearLocal = () => {
    document.querySelector(".textarea").value = "";
    localStorage.clear();
    localStorage.removeItem("note");
  };

  useEffect(() => {
    if (notes === "") {
      setNotes(localStorage.getItem("note"));
    }
  }, [notes]);

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              onChange={inputTextHandler}
              className="textarea is-large"
              placeholder="Notes..."
              value={notes}
            />
          </div>
        </div>
        <button
          onClick={saveToLocal}
          className="button is-large is-primary is-active"
        >
          Save
        </button>
        <button onClick={clearLocal} className="button is-large">
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
