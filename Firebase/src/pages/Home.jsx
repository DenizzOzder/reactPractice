import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";

export default function Home() {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential.email);
      }
    });
  });
  return <div>Giriş Yapan -- {user}</div>;
}
