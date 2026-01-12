import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { useEffect, useState } from "react";

import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const base_URL = "https://fakestoreapi.com";
        const response = await axios.get(`${base_URL}/products`);

        // Gelen veriyi state'e atıyoruz
        setProducts(response.data);
      } catch (error) {
        console.error("Veri çekilirken hata oluştu:", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Header />
        {products.map((product) => console.log(product))}
      </Container>
    </>
  );
}

export default App;
