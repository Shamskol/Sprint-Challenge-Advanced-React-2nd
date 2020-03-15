import React from "react";

import Navbar from "./components/Navbar";
import PlayerList from "./components/PlayerList";
import PlayerCard from "./components/PlayerCard";

//import "./App.css";

function App() {
  return (
    <div className="App">
     <Navbar/>
      <PlayerList />
    </div>
  );
}

export default App;
