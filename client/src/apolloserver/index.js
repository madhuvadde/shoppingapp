const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const ProductAPI = require("./datasource/product-api");
const CategoryAPI = require("./datasource/category-api");
const BannerAPI = require("./datasource/banner-api");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      productAPI: new ProductAPI(),
      categoryAPI: new CategoryAPI(),
      bannerAPI: new BannerAPI(),
    };
  },
});
server.listen().then(() => {
  console.log("Server is Listening on Port 4000");
});
