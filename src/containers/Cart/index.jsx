
import { CartItems } from "../../components/CartItems";
import  { CartResume } from "../../components/CartResume"
import {CartImg , Container,Wrapper } from "./styles";



export function Cart() {
  return (
    
 <Container >
 
      <CartImg />
    
      <Wrapper>
      <CartItems/>
      <CartResume />
      </Wrapper>
 </Container>
  );



}



