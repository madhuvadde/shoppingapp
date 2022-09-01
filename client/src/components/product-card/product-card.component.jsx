import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addItemToCart } from "../../store/cart";
import "./product-card.style.css";

const buttonStyle = {
  backgroundColor: "crimson",
  border: "none",
  width: 120,
};

const ProductCard = ({ item }) => {
  const { name, imageURL, price, description } = item;
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addItemToCart({ ...item, quantity: 1 }));
  };
  return (
    <Card
      style={{ width: "18rem", border: "none", borderBottom: "dotted" }}
      className='card-container'
    >
      <Card.Title
        className='cardBody-name'
        style={{ fontSize: 21, fontWeight: "bold" }}
      >
        {name}
      </Card.Title>
      <Card.Body className='cardBody-container'>
        <Card.Img variant='top' src={imageURL} />
        <Card.Text style={{ backgroundColor: "#f2f2f2" }}>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Body className='cardBody-footer'>
        <Card.Text style={{ fontSize: 20 }}>MRP Rs.{price}</Card.Text>
        <Button
          variant='primary'
          style={buttonStyle}
          onClick={addProductToCart}
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
