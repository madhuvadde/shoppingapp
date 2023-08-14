import { useQuery, gql } from "@apollo/client";
import Carousel from "react-bootstrap/Carousel";
import "./carousal-style.css";
// import { Carousel as UICarousel } from "primereact/carousel";

const BANNERS = gql`
  query ExampleQuery {
    bannersForHome {
      bannerImageUrl
      bannerImageAlt
      id
    }
  }
`;

// const bannerTemplate = (banner) => {
//   console.log("Banner:::::", banner);
//   return (
//     <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
//       <div className="mb-3">
//         <img
//           className="d-block w-100"
//           src={banner.bannerImageUrl}
//           alt={banner.bannerImageAlt}
//         />
//       </div>
//     </div>
//   );
// };

const Carousal = () => {
  const { loading, error, data: banners } = useQuery(BANNERS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error :{error.message}</p>;
  return (
    <>
      {/* <h1 className="bg-red-900">Carousal</h1>
      <div className="card flex justify-content-center">
        <UICarousel
          value={banners.bannersForHome[0]}
          numVisible={0}
          numScroll={1}
          orientation="horizontal"
          itemTemplate={bannerTemplate}
          className="custom-carousel"
          circular
        />
      </div> */}
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
    </>
  );
};
export default Carousal;
