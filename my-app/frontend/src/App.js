import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ContactPage from "./pages/Contact";
import KittensPage from "./pages/Kittens";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
// note: create logo : maziuk.
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "kittens", element: <KittensPage /> },
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
