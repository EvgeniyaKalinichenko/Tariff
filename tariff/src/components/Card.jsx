import "./Card.css";

const Card = ({ name, cost, speed, value, color, isSelected }) => {
  return (
    <div className="cardContainer">
      <div className={`card ${isSelected ? "isSelected" : ""} ${color} `}>
        <div className="name">{name}</div>
        <div className="cost">{cost}</div>
        <div className="speed">{speed}</div>
        <div className="value">{value}</div>
      </div>
    </div>
  );
};

export default Card;
