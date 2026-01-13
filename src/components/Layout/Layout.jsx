import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loading from "../Loading";

export default function Layout() {
  return (
    <div>
      <Loading />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
