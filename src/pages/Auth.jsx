import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../Firebase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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
          <Button variant="contained">Giriş Yap</Button>
          <Button variant="contained" onClick={Register}>
            Kayıt Ol
          </Button>
          <Button variant="contained">Google ile Giriş</Button>
        </div>
      </div>
    </>
  );
}
