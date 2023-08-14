import { Link } from "react-router-dom";
import "./home-card.style.css";

const HomeCard = ({ category, idx }) => {
  const { name, imageUrl, description, key } = category;
  const ImageContainer = () => (
    <div className="home-card-image-container">
      <img src={imageUrl} alt={`${name} section`} />
    </div>
  );
  const BodyContainer = () => (
    <div className="container">
      <div className="container-data">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="container-link">
        <Link to="/products" className="home-card-btn">
          Explore {key}
        </Link>
      </div>
    </div>
  );
  return (
    <div className="home-card-container">
      {idx % 2 !== 0 ? (
        <>
          <BodyContainer />
          <ImageContainer />
        </>
      ) : (
        <>
          <ImageContainer />
          <BodyContainer />
        </>
      )}
    </div>
  );
};
export default HomeCard;
