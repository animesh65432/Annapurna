import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage, Dashboardpage, Recipepage, WhyTheseChagnesPage } from "./pages"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route ></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboardpage />}></Route>
        <Route path="/recipe/:id" element={<Recipepage />}></Route>
        <Route path="/WhyTheseChagnes/:id" element={<WhyTheseChagnesPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
