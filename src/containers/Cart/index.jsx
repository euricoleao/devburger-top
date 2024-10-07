
import { CartItems } from "../../components/CartItems";
import  { CartResume } from "../../components/CartResume"
import {CartImg , Container,Wrapper } from "./styles";
import LoCard from '../../assets/logocart.png';



export function Cart() {
  return (
    
 <Container >
 
      <CartImg >
  <img src={LoCard} alt="" />
      </CartImg>
    
      <Wrapper>
      <CartItems/>
      <CartResume />
      </Wrapper>
 </Container>
  );



}



