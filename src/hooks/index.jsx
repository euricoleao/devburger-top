import { UserProvider } from "./UseContext";
import { CartProvider } from "./CartContext"



const AppProvider = ({ children }) => {
    return (

        <UserProvider>
            <CartProvider>{children} </CartProvider>
        </UserProvider>
    )

}
export default AppProvider;