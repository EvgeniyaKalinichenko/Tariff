import React, { useState } from "react";
import "./Card.css";

const Card = ({ name, cost, speed, value, color }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="cardContainer">
      <div
        className={isSelected ? `card ${color} + isSelected` : `card ${color} `}
        onMouseOver={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
      >
        <div className="name">{name}</div>
        <div className="cost">{cost}</div>
        <div className="speed">{speed}</div>
        <div className="value">{value}</div>
      </div>
    </div>
  );
};

export default Card;
