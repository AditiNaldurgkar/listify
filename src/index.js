import React from "react";
import Addnote from "./views/add/add";
import Home from "./home/home";
import Shownote from "./views/show/show";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
const root =createRoot(document.getElementById("root"));
const router=createBrowserRouter([{
    path:'/',
    element:<Home/>

},{
    path:'/add',
    element:<Addnote/>

}
,{
    path:'/show',
    element:<Shownote/>
}])
root.render(<RouterProvider router={router}></RouterProvider>);