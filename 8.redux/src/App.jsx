import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice.jsx";
import Users from "./Users.jsx";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Count is {count}</button>
      </div>
      <div className="userList">
        <Users />
      </div>
    </>
  );
}

export default App;
