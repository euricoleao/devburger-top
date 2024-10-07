
import {  Container, Header, Body, EmptyCart, Button  } from './styles';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import   Bin from '../../assets/bin.png';
import CartVazio from '../../assets/cartuser.png';


export function CartItems() {
    const { cartProducts,increaseProducts,decreaseProducts,deleteProducts } = useCart();

    console.log(cartProducts)
    return (
        <Container>

            <Header>
                <p></p>
                <p style={{marginLeft :30}}>Itens</p>
                <p style={{marginLeft :33}}>Preço</p>
                <p style={{marginRight :20}}>Quantidade</p>
                <p style={{marginLeft :20}}>Total</p>
                
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

                    <Button onClick={() => deleteProducts(product.id)}>
                        <img src={Bin } alt="lata-de-lixo"  />
                    </Button>  
                </Body>
            ))
        ) : (
            <EmptyCart >Carrinho vazio
            <img src={CartVazio} alt="carrinho vazio" />
            </EmptyCart>
        )}
            
            </Container>
    )
}


