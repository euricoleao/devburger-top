import styled from "styled-components";
import  BaHamburger  from '../../assets/logomham.svg';
import FundoClaro from '../../assets/backgroudbr.svg';
import { Link } from "react-router-dom";


export const Container =styled.div`
width: 100%;
min-height:100vh ;
background-color: #f0f0f0;
background: linear-gradient(
   rgba(255, 255, 255, 0.1),
   rgba(255, 255, 255, 0.0)
 ),
 url('${FundoClaro}');

`;

export const Banner =styled.div`
height: 480px;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
background: url('${BaHamburger}') no-repeat;
background-position: center;
background-color: #1f1f1f;
width: 100%;
position: relative;
h1 {
    font-family: 'Road Rage',sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 80px;
    line-height: 65px;
    position: absolute;
    right: 20%;
    top: 30%;
    color: #fff;

    span {
        display: block;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        font-family: ''Road Rage',sans-serif';
    }
    
}


`;

export const CategoryMenu =styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;
`;


export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color: ${props => props.$isActiveCategory ? '#9758a6' : '#2B2C2EFF'};
font-size: 24px;
font-weight: 500;
border: none;
padding-bottom: 5px;
line-height: 20px;
border-bottom: ${ (props) => props.$isActiveCategory &&  '3px solid #9758a6'} ;
`;

export const ProducstsContainer =styled.div`
display: grid;
grid-template-columns:repeat(3, 1fr) ;
padding: 40px;
justify-content: center;
max-width: 1280px;
gap: 60px;
margin: 50px auto;

`;


