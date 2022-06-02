import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "./list-group.style.css";

const style = {
  backgroundColor: "#f2f2f2",
  fontSize: 25,
};

const SideBar = () => {
  return (
    <ListGroup>
      <ListGroup.Item style={style}>
        <Link to="/products-not-available" className="productsUnavailable-link">
          Fruits & Vegetables
        </Link>
      </ListGroup.Item>
      <ListGroup.Item style={style}>
        <Link to="/products-not-available" className="productsUnavailable-link">
          Bakery Cakes and Dairy
        </Link>
      </ListGroup.Item>
      <ListGroup.Item style={style}>
        <Link to="/products-not-available" className="productsUnavailable-link">
          Beverages
        </Link>
      </ListGroup.Item>
      <ListGroup.Item style={style}>
        <Link to="/products-not-available" className="productsUnavailable-link">
          Beauty and Hygiene
        </Link>
      </ListGroup.Item>
      <ListGroup.Item style={style}>
        <Link to="/products-not-available" className="productsUnavailable-link">
          Baby Care
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};
export default SideBar;
