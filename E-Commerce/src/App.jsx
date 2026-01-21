import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}
export default App;
