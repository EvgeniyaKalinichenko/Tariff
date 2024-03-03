import React from "react";
import tariffs from "./data";
import Card from "./Card";

function Tariff() {
  return (
    <div>
      {tariffs.map((tariff, index) => {
        return (
          <Card
            key={tariff.name}
            {...tariff}
            color={getColor(index)}
            tariff={tariff}
          />
        );
      })}
    </div>
  );
}

function getColor(index) {
  switch (index) {
    case 0:
      return "blue";
    case 1:
      return "green";
    case 2:
      return "orange";
    case 3:
      return "black";
    default:
      return "red";
  }
}

export default Tariff;
