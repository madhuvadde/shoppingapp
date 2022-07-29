import { useQuery, gql } from "@apollo/client";
import Carousal from "../../components/carousal/carousal-component";
import HomeCard from "../../components/home-card/home-card.component";
import QueryResult from "../../components/query-result/query-result.component";
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

  return (
    <div>
      <Carousal />
      <QueryResult error={error} loading={loading} data={data}>
        {data?.categoriesForHome
          ?.map((categoryItem) => categoryItem)
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((category, idx) => (
            <HomeCard key={category.id} category={category} idx={idx} />
          ))}
      </QueryResult>
    </div>
  );
};

export default Home;
