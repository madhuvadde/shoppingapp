const resolvers = {
  Query: {
    productsForHome: (_, __, { dataSources }) => {
      return dataSources.productAPI.getProductsForHome();
    },
    categoriesForHome: (_, __, { dataSources }) => {
      return dataSources.categoryAPI.getCategoriesForHome();
    },
    bannersForHome: (_, __, { dataSources }) => {
      return dataSources.bannerAPI.getBannersForHome();
    },
  },
};
module.exports = resolvers;
