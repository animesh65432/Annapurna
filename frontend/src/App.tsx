import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import { PageLaoding, NotFound } from "./components"

const LandingPage = lazy(() => import("./pages/Landing"))
const Dashboardpage = lazy(() => import("./pages/DashboardPage"))
const Recipepage = lazy(() => import("./pages/RecipePage"))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLaoding />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboardpage />} />
          <Route path="/recipe/:id" element={<Recipepage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
