import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productSlice";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
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
            <div>
              <button
                className="detail"
                onClick={() => navigate(`/product-details/${product.id}`)}
              >
                Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
