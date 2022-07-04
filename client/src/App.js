import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Products = lazy(() =>
  import("./components/products/products-list.component")
);
const LogIn = lazy(() => import("./routes/login/logIn-component"));
const Register = lazy(() =>
  import("./routes/Register/register-form.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const ProductsUnavailable = lazy(() =>
  import("./components/products-not-available/products-not-available.component")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner animation="grow" />}>
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
      </Suspense>
    </div>
  );
}

export default App;
