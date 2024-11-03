import { createBrowserRouter } from "react-router-dom";
import { Cart, Home, Register, Login, Menu, Checkout, CompletePayment, Admin } from "../containers";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";



//import PrivateRoute from "./private-route";
//import paths from "../constants/paths";


export const router = createBrowserRouter([


    {
        path: '/',
        element: (
        <>
            <Header />
            <Home />
            <Footer />
        </>),                    //<Header /><Home /> <Footer />
    },

    {
        
        path: '/login',
        element: <Login />
    },


    {
        path: '/cadastro',
        element: <Register />,
    },

   

    {
        path: '/cardapio',
        element: (
            <>
                <Header />,
                <Menu /> ,
            </>
        ),
    },

    {
        path: '/pedidos',
        element: <Admin />

    },
    {
        path: '/listar-pedidos',
        element: <Admin />

    },
    {
        path: '/adicinar-produto',
        element: <Admin />

    },


    {
        path: '/carrinho',
        element: (
            <>
                <Header />
                <Cart />

            </>
        ),
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