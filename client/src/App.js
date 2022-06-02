import "./App.css";
import Products from "./components/products/products-list.component";
import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import LogIn from "./routes/login/logIn-component";
import Register from "./routes/Register/register-form.component";
import Checkout from "./routes/checkout/checkout.component";
import ProductsUnavailable from "./components/products-not-available/products-not-available.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="signin" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="products-not-available"
            element={<ProductsUnavailable />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
