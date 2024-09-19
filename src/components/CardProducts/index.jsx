import PropTypes from "prop-types";
import { Container, CardImage} from "./styles";
import  { CartButton } from '../../components/CartButton';
import { useCart } from "../../hooks/CartContext";

export function CardProducts({product}) {
    const {putProductInCart } = useCart()
  
    return (
    
        <Container>
            <CardImage src={product.url} alt={product.name} />
           <div>
            <p>{product.name}</p>
            <strong>{product.currencyValue } </strong>
            </div>
            <CartButton onClick={ () => putProductInCart(product)} ></CartButton>
        </Container>
      
    )
}
CardProducts.propTypes = {
    product: PropTypes.object,
};