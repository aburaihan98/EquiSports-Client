import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AddEquipment from "../pages/AddEquipment";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Root from "../Root";
import ErrorPage from "./../ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/add-equipment",
        element: <AddEquipment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
