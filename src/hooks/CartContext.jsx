import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const updateLocalStorage = async (product) => {
        localStorage.setItem('devburger:cartInfo',
         JSON.stringify(product));
    }

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)
        let newCartProducts = []
        if (cartIndex > 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)

        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }
         updateLocalStorage(newCartProducts)
    };

   const clearCart = () => {
    setCartProducts([]);
    
     updateLocalStorage([]);
   };

    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)
       await setCartProducts(newCart)
        updateLocalStorage(newCart)
    }

    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 }
                : product
        })
        setCartProducts(newCart);

        await updateLocalStorage(newCart)
    }
    //
    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {

            const newCart = cartProducts.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 }
                    : product
            })

            setCartProducts(newCart);

            await updateLocalStorage(newCart)
        }else {
            deleteProducts(productId)
        }

    }

    useEffect(() => {
        const ClientCartData = localStorage.getItem('devburger:cartInfo')

        if (ClientCartData) {
            setCartProducts(JSON.parse(ClientCartData));
        }

    }, []);

    return (

        <CartContext.Provider value={{ putProductInCart, cartProducts, increaseProducts, decreaseProducts ,deleteProducts,clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useUser must be a valid context')
    }

    return context;
};

CartProvider.propTypes = {
    children: PropTypes.node
};
