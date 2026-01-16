import useCounter from "./hooks/useCounter";
import "./App.css";
import useToggle from "./hooks/useToggle";
import useCopyPaste from "./hooks/useCopyPaste";
import { useState } from "react";

function App() {
  // Custom Hooku Kullanım
  const { count, increase, decrease } = useCounter(); // useCounter
  const { open, toggle } = useToggle(); // useToggle
  const [copied, copy] = useCopyPaste(); // useCopyPaste
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h2>Counter Hook</h2>
        <div>{count}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>

      <div>
        <h2>Toggle Hook</h2>
        <div>{open ? "Açık" : "Kapalı"}</div>
        <button onClick={toggle}>Değiştir</button>
      </div>

      <div>
        <h2>CopyPaste Hook</h2>
        <input
          type="text"
          placeholder="Kopyalancak Metin"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => copy(text)}> Kopyala </button>
        {copied && <div> Son Kopyalanan: {copied} </div>}
      </div>
    </>
  );
}

export default App;
