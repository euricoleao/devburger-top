import PropTypes from "prop-types";
import { Container, CardImage} from "./styles";
import  { CartButton } from '../../components/CartButton';

export function CardProducts({product}) {

    console.log(product)
    return (
    
        <Container>
            <CardImage src={product.url} alt={product.name} />
           <div>
            <p>{product.name}</p>
            <strong>{product.currencyValue } </strong>
            </div>
            <CartButton></CartButton>
        </Container>
      
    )
}
CardProducts.propTypes = {
    product: PropTypes.object,
};