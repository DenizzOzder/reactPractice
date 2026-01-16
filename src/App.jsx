import useCounter from "./hooks/useCounter";
import "./App.css";
import useToggle from "./hooks/useToggle";

function App() {
  // Custom Hooku Kullanım
  const { count, increase, decrease } = useCounter(); // useCounter
  const { open, toggle } = useToggle(); // useToggle

  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>

      <div>
        <div>{open ? "Açık" : "Kapalı"}</div>
        <button onClick={toggle}>Değiştir</button>
      </div>
    </>
  );
}

export default App;
