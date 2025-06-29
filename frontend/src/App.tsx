import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
import { PageLaoding, NotFound, ErrorBoundary } from "./components"

const LandingPage = lazy(() => import("./pages/Landing"))
const Dashboardpage = lazy(() => import("./pages/DashboardPage"))
const Recipepage = lazy(() => import("./pages/RecipePage"))
const SavePages = lazy(() => import("./pages/SavePage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/dashboard",
    element: <Dashboardpage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/recipe/:id",
    element: <Recipepage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/save",
    element: <SavePages />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default function App() {
  return (
    <Suspense fallback={<PageLaoding />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
