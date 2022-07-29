const express = require("express");
const fs = require("fs");
const app = express();

const { HOSTSERVER, PORT } = process.env;
const { products, categories, banners } = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/db.json`)
);

const amendHostURL = (imageURL) => {
  return `${HOSTSERVER}${PORT}${imageURL}`;
};
app.use(express.static(`${__dirname}/public`));

app.get("/api/v1/products", (req, res) => {
  const allProducts = products.map((product) => ({
    ...product,
    imageURL: amendHostURL(product.imageURL),
  }));
  res.status(200).send(allProducts);
});

app.get("/api/v1/categories", (req, res) => {
  const allCategories = categories.map((category) => ({
    ...category,
    imageUrl: amendHostURL(category.imageUrl),
  }));
  res.status(200).send(allCategories);
});

app.get("/api/v1/banners", (req, res) => {
  const allBanners = banners.map((banner) => ({
    ...banner,
    bannerImageUrl: amendHostURL(banner.bannerImageUrl),
  }));
  res.status(200).send(allBanners);
});

module.exports = app;
