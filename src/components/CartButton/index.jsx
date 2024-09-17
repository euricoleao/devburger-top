import { ContainerButton } from './styles';
import Cart from '../../assets/cart.png';
import PropTypes from 'prop-types';

export function CartButton({ ...props }) {
    return <ContainerButton { ...props}>
        <img  src={Cart} alt='carrinho' />
        
         </ContainerButton>;
}

CartButton.propTypes = {
    children: PropTypes.string,
};