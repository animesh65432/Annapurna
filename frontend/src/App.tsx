import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage, Dashboardpage } from "./pages"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboardpage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
