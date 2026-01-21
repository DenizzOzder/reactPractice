import "./App.css";
import Header from "./components/Header";
import RouterConfig from "./config/routerConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Header />
      <RouterConfig />
      {/* Toast Bildirimleri -- 3 Saniye sonra oto yok olcak */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
