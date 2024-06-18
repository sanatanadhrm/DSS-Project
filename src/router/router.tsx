import { createBrowserRouter } from "react-router-dom";
import { AdminPage } from "../pages/admin";
import App from "../App";
import { HomePage } from "../pages/Home";
import { ParkingPage } from "../pages/Parking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/parking",
        element: <ParkingPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);
