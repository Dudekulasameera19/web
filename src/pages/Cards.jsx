import "./Card.css";

export const Cards = ({ title, description, price }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5>{title}</h5>
        <p>{description}</p>
        <h6>{price}</h6>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};