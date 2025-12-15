import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center gap-4">
        
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 rounded-xl bg-red-500 text-white font-semibold shadow"
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 rounded-xl bg-green-500 text-white font-semibold shadow"
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold shadow"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("purple")}
          className="px-4 py-2 rounded-xl bg-purple-500 text-white font-semibold shadow"
        >
          Purple
        </button>

        <button
          onClick={() => setColor("black")}
          className="px-4 py-2 rounded-xl bg-black text-white font-semibold shadow"
        >
          Black
        </button>

      </div>
    </div>
  )
}

// export default App




// import { useState, useEffect } from "react"

// function App() {
//   // 1️⃣ Load color from localStorage OR use default
//   const [color, setColor] = useState(() => {
//     return localStorage.getItem("bgColor") || "olive"
//   })

//   // 2️⃣ Save color to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("bgColor", color)
//   }, [color])

//   return (
//     <div
//       className="w-full h-screen duration-300"
//       style={{ backgroundColor: color }}
//     >
//       <div className="fixed bottom-12 inset-x-0 flex justify-center gap-4">
        
//         <button
//           onClick={() => setColor("red")}
//           className="px-4 py-2 rounded-xl bg-red-500 text-white font-semibold"
//         >
//           Red
//         </button>

//         <button
//           onClick={() => setColor("green")}
//           className="px-4 py-2 rounded-xl bg-green-500 text-white font-semibold"
//         >
//           Green
//         </button>

//         <button
//           onClick={() => setColor("blue")}
//           className="px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold"
//         >
//           Blue
//         </button>

//         <button
//           onClick={() => setColor("purple")}
//           className="px-4 py-2 rounded-xl bg-purple-500 text-white font-semibold"
//         >
//           Purple
//         </button>

//         <button
//           onClick={() => setColor("black")}
//           className="px-4 py-2 rounded-xl bg-black text-white font-semibold"
//         >
//           Black
//         </button>

//       </div>
//     </div>
//   )
// }

// export default App
