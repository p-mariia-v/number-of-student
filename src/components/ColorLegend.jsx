import regionColors from "../data/regionColors.js";

const ColorLegend = ({ activeRegion, onHover }) => {
  const regionList = Object.entries(regionColors).filter(
    ([region]) => region !== "Other",
  );

  return (
    <div className="legend">
      {regionList.map(([region, color]) => {
        const isDimmed = activeRegion && activeRegion !== region;

        return (
          <div
            key={region}
            className="legend-pill"
            style={{ background: color, opacity: isDimmed ? 0.4 : 1 }}
            onMouseEnter={() => onHover(region)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onHover(activeRegion === region ? null : region)}
          >
            {region}
          </div>
        );
      })}
    </div>
  );
};

export default ColorLegend;
