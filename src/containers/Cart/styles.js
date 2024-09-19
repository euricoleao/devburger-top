import styled from "styled-components";
import  CartLogo from "../../assets/logoCard.svg";
import FundoClaro from '../../assets/backgroudbr.svg';

export const Container = styled.div`
width: 100%;
min-height:100vh ;
background-color: #f0f0f0;
background: linear-gradient(
   rgba(255, 255, 255, 0.0),
   rgba(255, 255, 255, 0.0)
 ),
 url('${FundoClaro}');

`;
export const CartItems = styled.div`

`;


export const CartImg = styled.div`
   background: url('${ CartLogo}');
   background-size: cover;
   background-position: center;
   height: 480px;

`;
