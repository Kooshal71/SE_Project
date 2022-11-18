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
import Dbms from "./Pages/MainPages/Dbms";
import Shutdown from "./Pages/OperatorPages/Shutdown";
import Card from "./Pages/DatabasePages/Card";
import Client from "./Pages/DatabasePages/Client";
import Transaction from "./Pages/DatabasePages/Transaction";
import BalanceDBMS from "./Pages/DatabasePages/BalanceDBMS";

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
  {
    path: "/shutdown",
    element: <Shutdown />,
  },
  {
    path: "/dbms",
    element: <Dbms />,
  },
  {
    path: "/dbms/card",
    element: <Card />,
  },
  {
    path: "/dbms/client",
    element: <Client />,
  },
  {
    path: "/dbms/transaction",
    element: <Transaction />,
  },
  {
    path: "dbms/balance",
    element: <BalanceDBMS />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
