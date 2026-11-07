import * as d3 from "d3";

const Barplot = ({ data }) => {
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
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, innerHeight])
    .padding(0.2);

  // X scale: students
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students) || 0])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* Bars */}
        {data.map((d) => (
          <rect
            key={d.country}
            x={0}
            y={yScale(d.country)}
            width={xScale(d.students)}
            height={yScale.bandwidth()}
            fill="steelblue"
          />
        ))}

        {/* Country labels */}
        {data.map((d) => (
          <text
            key={d.country}
            x={-10}
            y={yScale(d.country) + yScale.bandwidth() / 2}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize={12}
          >
            {d.country}
          </text>
        ))}

        {/* Student values */}
        {data.map((d) => (
          <text
            key={d.country}
            x={xScale(d.students) + 5}
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
