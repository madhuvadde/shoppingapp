const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    productsForHome: [Product!]!
    categoriesForHome: [Category!]!
    bannersForHome: [Banner!]!
  }
  type Product {
    id: String!
    name: String!
    imageURL: String
    description: String
    price: Int!
  }
  type Category {
    id: String!
    name: String!
    imageUrl: String
    description: String
    key: String
    order: Int
  }

  type Banner {
    bannerImageUrl: String
    bannerImageAlt: String!
    id: ID!
  }
`;

module.exports = typeDefs;
