import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../redux/productSlice";
import Loading from "../Loading";

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
  const selectedItem = products.find((item) => item.id === parseInt(id));

  if (loading) {
    return <Loading />;
  }

  return (
    <ul>
      <li key={selectedItem.id}>
        <p className="Category">{selectedItem.category}</p>
        <img src={selectedItem.image} alt={selectedItem.title} width="50" />
        <p>Price: {selectedItem.price}₺</p>
        <p>{selectedItem.title}</p>
        <p>{selectedItem.description}</p>
      </li>
    </ul>
  );
}
