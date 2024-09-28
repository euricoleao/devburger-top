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

export const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 30px;
padding-bottom: 30px;
`;


export const CartImg = styled.div`
   background: url('${ CartLogo}');
   background-size: cover;
   background-position: center;
   height: 480px;

`;
export const CartResume = styled.div`

`;
