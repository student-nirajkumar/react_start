import { useState } from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 space-y-6">
      
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-xl font-bold">
        Tailwind test
      </h1>

      <Card
        tag="NEW"
        title="Beautiful Card"
        description="This card is created using React components and Tailwind CSS."
      />
    </div>
  )
}

export default App
