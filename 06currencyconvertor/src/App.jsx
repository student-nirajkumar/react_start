import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const rates = useCurrencyInfo(from);

  // IMPORTANT: safe options
  const options = Object.keys(rates || {});

  // AUTO CONVERT (reactive)
  useEffect(() => {
    if (!rates || !rates[to]) {
      setConvertedAmount(0);
      return;
    }
    setConvertedAmount((amount * rates[to]).toFixed(4));
  }, [amount, to, rates]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">

        <InputBox
          label="From"
          amount={amount}
          currency={from}
          currencyOptions={options}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
        />

        <div className="flex justify-center my-4">
          <button
            type="button"
            onClick={swap}
            className="px-4 py-1 bg-blue-600 text-white rounded"
          >
            Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currency={to}
          currencyOptions={options}
          onCurrencyChange={setTo}
          amountDisable
        />

      </div>
    </div>
  );
}

export default App;
