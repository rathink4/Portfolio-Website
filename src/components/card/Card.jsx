import "./card.scss";

const Card = ({ role, company, points}) => {
  return (
    <div className="card">
      <h2>{role}</h2>
      <h3>{company}</h3>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;

