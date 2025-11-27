import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Deniz");
  //Her zaman çalışır
  useEffect(() => {
    console.log("Her zaman");
  });

  //Component İlk render edildiğinde çalışır
  useEffect(() => {
    console.log("İlk Render Anında Çalıştı");
  }, []);

  //Component İlk render edildiğinde ve firstname State değiştiğinde çalışır
  useEffect(() => {
    console.log("İlk Render + StateChange");
  }, [name]);
  const handleChange = () => {
    setName(name + "1");
  };
  return (
    <>
      <div>Use Effect</div>
      <div>{name}</div>
      <div>
        <button onClick={handleChange}>Değiştir</button>
      </div>
    </>
  );
}

export default App;
