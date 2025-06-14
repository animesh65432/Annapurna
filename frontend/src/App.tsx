import React from 'react'
import { Landing } from "./components"
import { BrowserRouter } from "react-router-dom"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  )
}

export default App