const { RESTDataSource } = require("apollo-datasource-rest");

class CategoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/";
  }

  getCategoriesForHome() {
    return this.get("categories");
  }
}

module.exports = CategoryAPI;
