import { useQuery, gql } from "@apollo/client";
import ProductCard from "../../components/product-card/product-card.component";
import SideBar from "../../components/list-group/list-group.component";
import QueryResult from "../../components/query-result/query-result.component";
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
  return (
    <div className='product-page'>
      <div className='products-sidebar'>
        <SideBar />
      </div>

      <div className='products'>
        <QueryResult loading={loading} error={error} data={products}>
          {products?.productsForHome?.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </QueryResult>
      </div>
    </div>
  );
};

export default Products;
