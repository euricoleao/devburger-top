import { createBrowserRouter } from "react-router-dom";
import { Cart, Home , Register, Login ,Menu, Checkout, CompletePayment, Admin,} from "../containers";
import { Header } from "../components";
import { Footer } from "../components/Footer";


//import {PrivateRoute} from "./private-route";




export const router = createBrowserRouter([
   
  
     {
      path:'/path',
       element:<Admin />
     },
    
   
    {
        path:'/',
         element: (
           <>
           <Header />
         <Home /> 
          <Footer />
        </> 
        ),
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
        element: (
           <>
           <Header />,
         <Menu /> ,
        </> 
        ),
    },

    {
        path: '/carrinho',
        element: <Cart />,
    },

    {
        path: '/checkout',
        element: <Checkout />,
    },

    {
        path: '/complete',
        element: <CompletePayment />,
    },

   
]);