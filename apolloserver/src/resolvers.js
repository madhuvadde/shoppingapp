const resolvers = {
  Query: {
    productsForHome: (_, __, { dataSources }) => {
      return dataSources.productAPI.getProductsForHome();
    },
    categoriesForHome: (_, __, { dataSources }) => {
      return dataSources.productAPI.getCategoriesForHome();
    },
    bannersForHome: (_, __, { dataSources }) => {
      return dataSources.productAPI.getBannersForHome();
    },
  },
};
module.exports = resolvers;
