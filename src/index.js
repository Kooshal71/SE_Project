import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/MainPages/Home";
import Operator from "./Pages/MainPages/Operator";
import User from "./Pages/MainPages/User";
import Withdraw from "./Pages/UserPages/Withdraw";
import Deposit from "./Pages/UserPages/Deposit";
import Transfer from "./Pages/UserPages/Transfer";
import Balance from "./Pages/UserPages/Balance";
import SetPin from "./Pages/UserPages/SetPin";
import ChangePin from "./Pages/UserPages/ChangePin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/operator",
    element: <Operator />,
  },
  {
    path: "/user/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/user/transfer",
    element: <Transfer />,
  },
  {
    path: "/user/deposit",
    element: <Deposit />,
  },
  {
    path: "/user/balance",
    element: <Balance />,
  },
  {
    path: "/user/setPIN",
    element: <SetPin />,
  },
  {
    path: "/user/changePIN",
    element: <ChangePin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
