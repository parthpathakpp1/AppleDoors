import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Customization from "./pages/Customization";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "customization/:doorName",
      element: <Customization />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;