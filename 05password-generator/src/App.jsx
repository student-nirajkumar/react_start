import React, {
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) chars += "0123456789";
    if (charAllowed) chars += "!@#$%^&*()_+-=[]{}~";

    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-xl px-5 py-6">

        {/* Title */}
        <h1 className="text-center text-2xl font-semibold text-orange-400 mb-5">
          Password generator
        </h1>

        {/* Password Field + Copy Button */}
        <div className="flex rounded-lg shadow-md mb-5 bg-white overflow-hidden">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Password"
            className="w-full px-3 py-2 text-gray-900 outline-none"
          />

          {/* COPY BUTTON WITH STRONG HOVER */}
          <button
            onClick={copyPassword}
            className="
              bg-blue-600
              hover:bg-blue-700
              hover:scale-110
              hover:shadow-2xl
              active:bg-blue-800
              transition-all
              duration-200
              px-5
              text-white
              font-semibold
              cursor-pointer
            "
          >
            COPY
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-center text-sm">

          {/* Length Slider */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              className="cursor-pointer accent-orange-400"
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-orange-400">
              Length: {length}
            </span>
          </div>

          {/* Numbers */}
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((p) => !p)}
            />
            Numbers
          </label>

          {/* Characters */}
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((p) => !p)}
            />
            Characters
          </label>
        </div>

      </div>
    </div>
  );
}

export default App;
