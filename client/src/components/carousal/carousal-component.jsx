import { useQuery, gql } from "@apollo/client";
import Carousel from "react-bootstrap/Carousel";
import "./carousal-style.css";

const BANNERS = gql`
  query ExampleQuery {
    bannersForHome {
      bannerImageUrl
      bannerImageAlt
      id
    }
  }
`;

const Carousal = () => {
  const { loading, error, data: banners } = useQuery(BANNERS);
  if (loading) return <p>loading...</p>;
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
