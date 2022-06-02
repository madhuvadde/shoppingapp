import { useQuery, gql } from "@apollo/client";
import Carousal from "../../components/carousal/carousal-component";
import HomeCard from "../../components/home-card/home-card.component";
import "./homepage.style.css";

const CATEGORIES = gql`
  query ExampleQuery {
    categoriesForHome {
      id
      name
      imageUrl
      description
      key
      order
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error :{error.message}</p>;
  const categories = data?.categoriesForHome
    ?.map((categoryItem) => categoryItem)
    .sort((a, b) => (a.order > b.order ? 1 : -1));
  return (
    <>
      <Carousal />
      {categories &&
        categories.map((category, idx) => (
          <HomeCard key={category.id} category={category} idx={idx} />
        ))}
    </>
  );
};

export default Home;
