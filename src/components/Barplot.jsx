import * as d3 from "d3";
import regions from "../data/regions.js";
import regionColors from "../data/regionColors.js";

const Barplot = ({ data, activeRegion }) => {
  const sortedData = [...data].sort((a, b) => b.students - a.students);
  // SVG dimensions
  const width = 500;
  const height = 400;

  // Margins
  const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 120,
  };

  // Inner chart dimensions
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Y scale: countries
  const yScale = d3
    .scaleBand() //шкала (для категорій)
    .domain(sortedData.map((d) => d.country)) //значення на щкалі - країни
    .range([0, innerHeight]) // розтяни від 0 до innerHeight
    .padding(0.2); // відстань між стовпчиками

  // X scale: students
  const xScale = d3
    .scaleLinear() //шкала (для чисел)
    .domain([0, d3.max(sortedData, (d) => d.students) || 0]) // Визначаємо мін=0 мах знаходимо, якщо що верни 0
    .range([0, innerWidth]); // розтяни від 0 до innerWidth

  const colorScale = d3
    .scaleOrdinal()
    .domain(Object.keys(regionColors))
    .range(Object.values(regionColors));

  return (
    <svg viewBox="0 0 500 400" width="100%" height="100%">
      {" "}
      {/*// полотноб де буде графік*/}
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {" "}
        {/* g - група елемнгтів. зміщуємо і ліво і вверх*/}
        {/* Bars */}
        {sortedData.map((d) => (
          <rect
            key={d.country}
            x={0}
            y={yScale(d.country)}
            width={xScale(d.students)}
            height={yScale.bandwidth()} //повертає висоту стовпчика
            fill={colorScale(regions[d.country] ?? "Other")}
            rx={yScale.bandwidth() / 2}
          />
        ))}
        {/* Country labels */}
        {sortedData.map((d) => (
          <text
            className="chart-label"
            key={d.country}
            x={-10} // робимо відступ від чарту
            y={yScale(d.country) + yScale.bandwidth() / 2} // центруємо, початок стовпчика додаємо це половину стовпчика
            textAnchor="end" // вирівнює по правому краю
            dominantBaseline="middle" // вирівнює текст вертикально по центру
            fontSize={12}
          >
            {d.country}
          </text>
        ))}
        {/* Student values */}
        {sortedData.map((d) => (
          <text
            className="chart-label"
            key={d.country}
            x={xScale(d.students) + 5} // в кінці стовпчика додаємо відстань
            y={yScale(d.country) + yScale.bandwidth() / 2}
            dominantBaseline="middle"
            fontSize={12}
          >
            {d.students}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default Barplot;
