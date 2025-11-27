import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [count, setCount] = useState(0);
  function stateDegistir() {
    console.log("RENDER GERÇEKLEŞTİ");
    setFirstName("Deniz");
    setLastName("Can");
  }
  const arttir = () => {
    console.log("RENDER GERÇEKLEŞTİ");
    setCount(count + 1);
  };
  return (
    <>
      <div>
        {firstName} {lastName}
      </div>
      <div>----------</div>
      <button onClick={stateDegistir}>
        Bana Tıkla İsim Değişkenin içi dolar
      </button>

      <div>{count}</div>
      <div>----------</div>
      <button onClick={arttir}>Arttır</button>
    </>
  );
}

export default App;
