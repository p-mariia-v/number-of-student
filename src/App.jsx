import { useState } from "react";
import "./App.css";
import data from "./data/data.js";
import Barplot from "./components/Barplot.jsx";
import ColorLegend from "./components/ColorLegend.jsx";

function App() {
  const [activeRegion, setActiveRegion] = useState(null); // null = нічого не вибрано
  return (
    <div className="app">
      <h1>Students by Country</h1>
      <h2>D3 & React course. First cohort</h2>
      <div className="legend-container">
        <ColorLegend activeRegion={activeRegion} onHover={setActiveRegion} />
      </div>
      <div className="chart-container">
        <Barplot data={data} activeRegion={activeRegion} />
      </div>
    </div>
  );
}

export default App;
