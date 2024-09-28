
import  Person  from "../../assets/user.png";
import  Cart  from "../../assets/cartuser.png";
import {
  Container,
  ContainerLeft, 
  ContainerRight,
  PageLink, 
  ContainerText,
  Line,


} from "./styles";



export function Header() {
  return (
    
 <Container >
  <ContainerLeft>
    <PageLink>
      Home
    </PageLink>
    <PageLink>
     Ver Produtos
    </PageLink>

  </ContainerLeft>

  <ContainerRight>
    <PageLink>
    <img src={Person} alt="logo-usuario" />
    </PageLink>
    <Line></Line>
    <PageLink>
    <img src={Cart} alt="logo-carrinho" />
    </PageLink>
   
   <ContainerText>
    <p> Olá, Eurico</p>
    <PageLink>Sair</PageLink>
   </ContainerText>



  </ContainerRight>

   
   
    
 </Container>
  );



}



