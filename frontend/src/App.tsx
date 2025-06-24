import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage, Dashboardpage, AnalysisPage } from "./pages"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboardpage />}></Route>
        <Route path="/analysis/:id" element={<AnalysisPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
