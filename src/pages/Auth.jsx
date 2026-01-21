import { Button } from "@mui/material";
import React from "react";

export default function Auth() {
  return (
    <>
      <div className="wrapper">
        Auth
        <div className="form">
          <label htmlFor="username">Kullanıcı adı</label>
          <input type="text" id="username" />
          <label htmlFor="password">Şifre</label>
          <input type="password" id="password" />
        </div>
        <div className="buttonWrapper">
          <Button variant="contained">Giriş Yap</Button>
          <Button variant="contained">Kayıt Ol</Button>
          <Button variant="contained">Google ile Giriş</Button>
        </div>
      </div>
    </>
  );
}
