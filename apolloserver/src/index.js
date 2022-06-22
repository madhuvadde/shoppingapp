const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const ProductAPI = require("./datasources/product-api");

const startApolloServer = async (typeDefs, resolvers) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        productAPI: new ProductAPI(),
      };
    },
  });
  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
  🚀  Server is running!
  🔉  Listening on port ${port}
  📭  Query at ${url}
`);
};
startApolloServer(typeDefs, resolvers);
