import React from "react";
import Home from "./home/home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
const root =createRoot(document.getElementById("root"));
const router=createBrowserRouter([{
    path:'/',
    element:<Home/>
}])
root.render(<RouterProvider router={router}></RouterProvider>);