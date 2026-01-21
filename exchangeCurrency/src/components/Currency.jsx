import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import axios from "axios";

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_PVwZoQsrCWcWrFnS3UPi1nhf4V9RK9eTT0znvI3a";
const EXCHANGE_API = `${BASE_URL}/?`;
export default function Currency() {
  //STATE TANIMLARI
  const [from, setFrom] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [exchange, setExchange] = useState("TRY");
  const [sonuc, setSonuc] = useState(0);

  //Calculate İşlemi
  const handleCalculate = async () => {
    console.log(from);
    console.log("Base: " + baseCurrency);
    console.log("Exchange To: " + exchange);

    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${baseCurrency}`
    );
    const currencyList = response.data.data;
    console.log(
      `Base Currenct: ${baseCurrency} --> Exchange: ${exchange} = RESULT: ${currencyList[exchange]}`
    );
    const result = (from * currencyList[exchange]).toFixed(2);
    console.log(`RESULT: ${result}`);
    setSonuc(result);
  };

  return (
    <div className="currencyDiv">
      <input
        type="number"
        className="amount"
        onChange={(e) => setFrom(e.target.value)}
      />
      <select
        className="fromCurrency"
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        <option>USD</option>
        <option>EUR</option>
        <option>TRY</option>
      </select>
      <AiFillCaretRight />
      <select
        className="toCurrency"
        onChange={(e) => setExchange(e.target.value)}
      >
        <option>TRY</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
      <input type="number" value={sonuc} readOnly />
      <button onClick={handleCalculate}>Dönüştür</button>
    </div>
  );
}
