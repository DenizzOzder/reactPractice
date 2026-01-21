import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./userSlice.jsx";

export default function Users() {
  const dispatch = useDispatch(); // Dispatch ile aksiyonları tetikliyoruz
  const people = useSelector((state) => state.user.users); // State içerisinden user ın users ını alıyoruz

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      <h2>User Lists</h2>
      {people.map((user) => console.log(user))}
    </>
  );
}
