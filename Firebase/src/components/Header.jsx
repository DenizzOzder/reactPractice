import React from "react";
import { Button } from "@mui/material";
import "../css/Header.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/auth");
    toast.success("Başarılı Şekilde Çıkış yapıldı");
  };
  return (
    <>
      <header>
        <h1>Firebase Practice</h1>
        <nav>
          <Button variant="contained" onClick={logout}>
            Çıkış Yap
          </Button>
        </nav>
      </header>
    </>
  );
}
