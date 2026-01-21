import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  // Register Fonksiyonu
  const Register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, pass);
      const user = response.user;
      if (user) {
        toast.success("Kullanıcı Oluşturuldu");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Login Fonksiyonu
  const Login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, pass);
      const loginUser = response.user;

      if (loginUser) {
        toast.success("Başarılı Giriş");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="wrapper">
        Auth
        <div className="form">
          <label htmlFor="username">Kullanıcı adı</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="buttonWrapper">
          <Button variant="contained" onClick={Login}>
            Giriş Yap
          </Button>
          <Button variant="contained" onClick={Register}>
            Kayıt Ol
          </Button>
          <Button variant="contained">Google ile Giriş</Button>
        </div>
      </div>
    </>
  );
}
