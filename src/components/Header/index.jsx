
import  Person  from "../../assets/user.png";
import  Cart  from "../../assets/cartuser.png";
import { useNavigate, useResolvedPath} from 'react-router-dom' ;
import { useUser } from '../../hooks/UseContext';



import {
  Container,
  ContainerLeft, 
  ContainerRight,
  PageLinkExit,
  PageLink, 
  ContainerText,
  Line,


} from "./styles";



export function Header() {

const  navigate = useNavigate();
const {logout, userInfo} = useUser();

 
const { pathname } = useResolvedPath();

function logoutUser(){
  logout();
  navigate('/login');
}
console.log(userInfo);

  return (
    
 <Container >
  <ContainerLeft>
    <PageLink to="/" $isActive={pathname === '/'} >Home</PageLink>
    <hr></hr>
    <PageLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardapio</PageLink>

  </ContainerLeft>
  
  <ContainerRight>
    <PageLink to="/carrinho">
    <img src={Cart} alt="logo-usuario" />
    </PageLink>
    <Line></Line>
    <PageLink >
    <img src={Person} alt="logo-carrinho" />
    </PageLink>
    
   <ContainerText>
    <p> Olá, <span>{userInfo.name}</span></p>
    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
   </ContainerText>



  </ContainerRight>

   
   
    
 </Container>
  );



}



