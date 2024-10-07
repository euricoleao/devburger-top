import styled from "styled-components";
import Backgound from '../../assets/backgraund-fundo.svg';
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${Backgound}');
display: flex;
justify-content: center;
align-items: center;
`;
export const LeftContainer = styled.div`
 display: flex;
 height:800px;
 width:600px;
 max-width: 50%;
 
 
 
`;
export const RightContainer = styled.div`
 background: #373737;
 border-radius: 0 10px 10px 0;
 height:800px;
 width:600px;
 max-width: 50%;
 padding:  25px 75px;
 display: flex;
 flex-direction: column;
 justify-content: center;
display: flex;

p {
    color: #fff;
}

 img{
    padding-top: 30px;
}
`;
export const Title = styled.h1`
 
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 28px;
    color:  #FFFF00;
    text-align: center;
    margin-top: 50px;
    padding-bottom: 70px;



`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
p {
    font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #ffffff;

}

`;
export const InputContainer = styled.div`
 label {
    
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    margin-top: 28px;
    margin-left: 4px;
    
    
 }
 input {
    
width: 100%;
height:40px;
border-radius: 5px;
background: #ffffff;
box-shadow: 3px 3px 10px 
rgba(74, 144, 226, 0.19);
padding-left: 10px;
font-size: 22px;
margin-bottom: 10px;
 }

 p {
    color: red;
 }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  cursor: pointer;
    text-decoration: underline;
    color:#FFFF00;
    font-size: 18px;

`;

