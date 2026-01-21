import React from "react";
import { Button } from "@mui/material";
import css from "../css/Header.module.css";
export default function Header() {
  return (
    <>
      <header>
        <h1>Firebase Practice</h1>
        <nav>
          <Button variant="contained">Çıkış Yap</Button>
        </nav>
      </header>
    </>
  );
}
