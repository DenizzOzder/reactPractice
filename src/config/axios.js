import axios from "axios";
const getAllProducts = async () => {
  const base_URL = "https://fakestoreapi.com";
  getAllProducts();
  const response = await axios.get(`${base_URL}/products`);
  console.log(response.data);
  return response.data;
};
const Products = getAllProducts();
export { Products };
