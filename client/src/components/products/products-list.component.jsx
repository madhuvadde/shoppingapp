import { useQuery, gql } from "@apollo/client";
import ProductCard from "../product-card/product-card.component";
import SideBar from "../list-group/list-group.component";
import "./products-list.style.css";

const PRODUCTS = gql`
  query ExampleQuery {
    productsForHome {
      id
      name
      imageURL
      description
      price
    }
  }
`;

const Products = () => {
  const { loading, error, data: products } = useQuery(PRODUCTS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div className="product-page">
      <div className="products-sidebar">
        <SideBar />
      </div>
      <div className="products">
        {products?.productsForHome?.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};
export default Products;
