import { useQuery } from "@apollo/client";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "../spinner/spinner-component";
import "./carousal-style.css";

const Carousal = (props) => {
  const { query } = props;
  const { loading, error, data: banners } = useQuery(query);
  if (loading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  if (error) return <p>Error :{error.message}</p>;
  return (
    <Carousel variant="dark" className="carousel-component">
      {banners?.bannersForHome?.map((banner) => {
        const { bannerImageUrl, bannerImageAlt, id } = banner;
        return (
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={bannerImageUrl}
              alt={bannerImageAlt}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default Carousal;
