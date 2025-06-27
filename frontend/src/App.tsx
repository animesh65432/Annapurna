import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage, Dashboardpage, Recipepage } from "./pages"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboardpage />}></Route>
        <Route path="/recipe/:id" element={<Recipepage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
