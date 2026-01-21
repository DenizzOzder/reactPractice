import { useState } from "react";
import "./App.css";

function App() {
  const [vize, setVize] = useState(0);
  const [final, setFinal] = useState(0);
  const [ortalama, setOrtalama] = useState(0);
  const hesapla = () => {
    setOrtalama(vize * 0.4 + final * 0.6);
    console.log("ORtalama Hesaplandı");
  };
  return (
    <>
      <div className="inputs">
        <p>Vize</p>
        <input
          type="number"
          value={vize}
          onChange={(e) => setVize(e.target.value)}
        />
        <p>Final</p>
        <input
          type="number"
          value={final}
          onChange={(e) => setFinal(e.target.value)}
        />
      </div>
      <button onClick={hesapla}>Ortalama</button>
      <div className="sonuc">
        <p>Ortalaman: {ortalama}</p>
      </div>
    </>
  );
}

export default App;
