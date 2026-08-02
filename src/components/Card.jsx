export const Card = ({ title, description, price }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5>{title}</h5>
        <p>{description}</p>
        <h6>{price}</h6>
        <button className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};