const { RESTDataSource } = require("apollo-datasource-rest");

class BannerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/";
  }

  getBannersForHome() {
    return this.get("banners");
  }
}

module.exports = BannerAPI;
