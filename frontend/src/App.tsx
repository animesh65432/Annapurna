import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
