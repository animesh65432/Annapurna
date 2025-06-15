import React from 'react'
import { LandingPage, HomePage } from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App