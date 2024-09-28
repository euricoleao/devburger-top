

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { useState,useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from '../../hooks/CartContext';
import {api} from '../../services/api';
import { toast } from "react-toastify";


export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(500)

  const { cartProducts} = useCart();

  useEffect(() =>{
    const sumAllItems = cartProducts.reduce( (acc, current) => {
        return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

const submitOrder = async () => {
  const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
  })

  await toast.promise( api.post('orders' , {products: order}),{
   pending: 'Realizando seu Pedido....',
   success: 'Pedido realizado com sucesso',
   error: 'Falha ao tentar realizar o seu pedido, tente novamente'
  })
  }

  return (
   <div>
 <Container >
 
  <div className="container-top">
  <h2 className="title">Resumo dos Itens</h2>
  <p className="items">Itens</p>
  <p className="items-price">{formatPrice( finalPrice)}</p>
  <p className="delivery-tax">Taxa de entrega</p>
  <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
  </div>

  <div className="container-bottom">
<p>Total</p>
<p>{formatPrice( finalPrice + deliveryTax)}</p>
  </div>
 
  
</Container>
<Button style={{ width: '100%', marginTop: 30}} onClick={submitOrder}>Finalizar Pedido</Button>
</div> 
  );
}


