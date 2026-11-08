import regionColors from "../data/regionColors.js";

const ColorLegend = ({ activeRegion, onHover }) => {
  const gap = 8;

  let offset = 0;
  const items = Object.entries(regionColors)

    .map(([region, color]) => {
      const pillWidth = region.length * 7 + 20;
      const x = offset;
      offset += pillWidth + gap;
      return { region, color, pillWidth, x };
    });

  return (
    <svg width={offset - gap} height={22}>
      {items.map((item) => {
        const isDimmed = activeRegion && activeRegion !== item.region;

        return (
          <g
            key={item.region}
            transform={`translate(${item.x}, 0)`}
            onMouseEnter={() => onHover(item.region)}
            onMouseLeave={() => onHover(null)}
            style={{
              cursor: "pointer",
              opacity: isDimmed ? 0.4 : 1,
              transition: "opacity 0.2s",
            }}
          >
            <rect
              width={item.pillWidth}
              height={22}
              fill={item.color}
              rx={11}
            />
            <text
              x={item.pillWidth / 2}
              y={11}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={11}
              fill="white"
            >
              {item.region}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default ColorLegend;
