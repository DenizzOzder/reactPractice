import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productSlice";
import "./ProductList.css";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  loading ? console.log("Loading products...") : console.log(products);
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p className="Category">{product.category}</p>
            <img src={product.image} alt={product.title} width="50" />
            <p>Price: {product.price}₺</p>
            <p>{product.title}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
