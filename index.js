import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";
import SportsData from './Data.json';



const App = () => {
  function useLocalState(localItem) {
    const [loc, setState] = useState(localStorage.getItem(localItem));

    function setLoc(newItem) {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }
    return [loc, setLoc];
  }

  const [previousResults, setTeam] = useLocalState("previousResults");
  return (
    <div>
      <h1 className="glow">Welcome to Sports Poll Center</h1>

      <div className="button">
        <button onClick={() => setTeam("Home Team")}>Home Team</button>
        <button onClick={() => setTeam("Draw")}>Draw</button>
        <button onClick={() => setTeam("Away Team")}>Away Team</button>
      </div>
      <div>
        <h1>PREVIOUS RESULTS : {previousResults}</h1>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
