import { useState } from "react";
import * as d3 from "d3";

const Bar = ({ country, students }) => {
  //const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      //onMouseEnter={() => setIsHovered(true)}
      //onMouseLeave={() => setIsHovered(false)}
      style={{
        //position: "relative",
        width: students * 10,
        height: 20,
        backgroundColor: "#f5f5f5",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#f5f5f5",
        borderRadius: 10,
        //boxShadow: isHovered
        //  ? `5px 5px 20px ${typeColor}`
        //  : "5px 5px 15px rgba(78, 78, 78, 0.3)",
        transition: "box-shadow 0.25s ease",
        margin: 4,
        paddingTop: 40,
      }}
    >
      <p>{country}</p>
    </div>
  );
};

export default Bar;
