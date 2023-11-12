import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import LayoutAdmin from "./routes/LayoutAdmin";
import ErrorPage from "./error-page";
import Login from "./pages/Login";
import Venta from "./pages/Venta";
/*
import Inventario from "./pages/Inventario";
import Perfiles from "./pages/Perfiles";
import Perfil from "./pages/Perfil";
import Historial from "./pages/Historial";
import Informe from "./pages/Informe";
import Gastos from "./pages/Gastos";
*/
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tienda",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "venta",
            element: <Venta />,
          },
          {
            path: "ingresar-inventario",
            element: <Venta />,
          },
        ],
      },
      {
        path: "/control",
        element: <LayoutAdmin />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "contacts/:contactId",
            element: <Venta />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
