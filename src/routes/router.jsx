import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components";
import { Footer } from "../components/Footer";
import { Home, Login, Register, Menu, Admin, Cart, Checkout, CompletePayment } from "../containers";

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
            </>), //<Header /><Home /> <Footer />
    },

    {
        index: true,
        element: <Login />,
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
