const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const PORT = process.env.PORT || 7000;
app.listen(PORT, "localhost", () => {
  console.log(`Server Started on PORT:${PORT}`);
});
