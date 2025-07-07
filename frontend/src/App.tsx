import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
import { PageLaoding, NotFound, ErrorBoundary } from "./components"

const Dashboardpage = lazy(() => import("./pages/DashboardPage"))
const Recipepage = lazy(() => import("./pages/RecipePage"))
const SavePages = lazy(() => import("./pages/SavePage"))
const DiscoverPage = lazy(() => import("./pages/DiscoverPage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboardpage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/discover",
    element: <DiscoverPage />,
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
