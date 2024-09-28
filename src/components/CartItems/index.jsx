
import {  Container, Header, Body, EmptyCart, Button  } from './styles';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import   Bin from '../../assets/bin.png';

export function CartItems() {
    const { cartProducts,increaseProducts,decreaseProducts } = useCart();

    console.log(cartProducts)
    return (
        <Container>

            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{marginRight :20}}>Quantidade</p>
                <p>Total</p>
                
            </Header>
            
            
            {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map(product => (
                <Body key={product.id}>
                    <img src={product.url} />
                    <p>{product.name}</p>
                    <p>{formatPrice(product.price)} </p>
                    <div className='quantity-container'>
                      <button onClick={() => decreaseProducts(product.id)}>-</button>  
                    <p>{product.quantity} </p>
                      <button onClick={() => increaseProducts(product.id)}>+</button> 
                    </div>
                    
                    <p>{formatPrice(product.quantity * product.price)} </p>

                    <Button onClick={() => decreaseProducts(product.id)}>
                        <img src={Bin } alt="lata-de-lixo" />
                    </Button>  
                </Body>
            ))
        ) : (
            <EmptyCart>Carrinho vazio</EmptyCart>
        )}
            
            </Container>
    )
}


