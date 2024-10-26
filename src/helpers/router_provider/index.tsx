import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../../pages";
import { HomePage } from "../../pages/home";
// import { User } from "../../pages/user";
import { Layout } from "../../components";
import { ProtectedRoute } from "./protectedRoute";
import { User } from "../../pages/user";
import { Product } from "../../pages/product";

export const router = createBrowserRouter([
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "user",
            element: <User />,
          },
          {
            path: "product",
            element: <Product />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
