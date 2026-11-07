import { useState } from "react";
import * as d3 from "d3";
import "./App.css";
import data from "./data/data.js";
import Barplot from "./components/Barplot.jsx";
console.log(data);

function App() {
  return (
    <div>
      <h1>Students by Country</h1>
      <Barplot data={data} />
    </div>
  );
}

export default App;
