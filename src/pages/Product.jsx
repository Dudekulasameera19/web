import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { ProductData } from "../data/ProductData";
import { Home } from "./Home";

export const Product = () => {
  return (
    <>
    <div className="container mt-5">
      <h1>Products</h1>
      <div className="row">
        {ProductData.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <Card
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};