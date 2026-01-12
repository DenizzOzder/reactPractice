import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <ProductList />
      </Container>
    </>
  );
}

export default App;
