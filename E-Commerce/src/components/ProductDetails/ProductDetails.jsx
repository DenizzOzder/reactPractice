import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import { addToCart } from "../../redux/cartSlice";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams(); // URL'den gelen ID
  const { products, loading } = useSelector((store) => store.products); // Tüm ürünler store'dan alınıyor
  useEffect(() => {
    // Eğer ürünler henüz yüklenmediyse, onları getir F5 yapıldığında da çalışır
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products]);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const selectedItem = products.find((item) => item.id === parseInt(id));
  const { category, image, price, title, description } = selectedItem || {};
  const AddCard = () => {
    const payload = {
      id,
      price,
      title,
      image,
      description,
      count,
    };
    dispatch(addToCart(payload));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ul>
      <li key={selectedItem.id}>
        <p className="Category">{category}</p>
        <img src={image} alt={title} width="50" />
        <p>Price: {price}₺</p>
        <p>{title}</p>
        <p>{description}</p>
        <div>
          <p>
            <span onClick={decrement}> - </span>
            {count}
            <span onClick={increment}> + </span>
          </p>
          <button onClick={AddCard}>Add to Cart</button>
        </div>
      </li>
    </ul>
  );
}
