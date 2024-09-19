import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import  { Register } from "../containers/Register"
import { Home } from "../containers/Home";
import { Menu } from "../containers/Menu";
import { Cart } from "../containers/Cart";

//import {PrivateRoute} from "./private-route";



export const router = createBrowserRouter([
   /* 
    {
        path:'/',
        element: <PrivateRoute />,
        children:[
          
        ],
    },*/

    {
        path:'/',
        element: <Home /> ,
    },
    
    
    {
        path:'/login',
        element: <Login />,
    },
    {
        path:'/cadastro',
        element: <Register />,
    },

    {
        path:'/cardapio',
        element: <Menu />,
    },

    {
        path: '/carrinho',
        element: <Cart />,
    },

   
]);