import React from 'react';
import Navbar from "./components/navbar";
import {createBrowserRouter, Outlet, Route, RouterProvider} from "react-router-dom";
import Home from "./page/Home";
import Training from "./page/training/Training";
import "./style.css";
import Agenda from "./page/aganda/Agenda";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar/><Outlet/></>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "training",
                element: <Training/>
            },
            {
                path: "aganda",
                element: <Agenda/>
            }
        ]
    },
])

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}


export default App;
