import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loading from "../Loading";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDrawer } from "../../redux/cartSlice";
import { calculateTotal } from "../../redux/cartSlice";
import { useEffect } from "react";

export default function Layout() {
  const { cartItems, drawer, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);
  return (
    <div>
      <Loading />
      <Header />
      <main>
        <Outlet />
        <Drawer
          open={drawer}
          anchor="right"
          onClose={() => dispatch(setDrawer())}
        >
          {cartItems &&
            cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.image} width={50} height={50} />
                  <p>{item.title}</p>
                  <p>{item.price}₺</p>
                  <p>Quantity: {item.count}</p>
                </div>
              );
            })}
          <h2>Total={total.toFixed(0)}₺</h2>
          <button onClick={() => dispatch(setDrawer())}>Close Basket</button>
        </Drawer>
      </main>
    </div>
  );
}
