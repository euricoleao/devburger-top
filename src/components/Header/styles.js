import styled from "styled-components";
import { Link  } from "react-router-dom";


export const Container = styled.div`
  height: 72px;
  background-color: #1f1f1f;
  //box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerLeft = styled.div`
display: flex;
gap: 30px;
`;

export const PageLink = styled(Link)`
cursor: pointer;
text-decoration: none;
color: ${ props => props.$isActive  ? '#9758a6' : '#fff'};
border-bottom: ${ props => props.$isActive ? '1px solid #9758a6' : 'none'};
padding-bottom: 5px;

font-size: 16px;
line-height: 19px;
transition: color 200ms;


&:hover {
   color: #9758a6;
}
`;

export const ContainerRight = styled.div`
   display: flex;
   align-items: center;
   gap: 48px;
    img {

    }
`;



export const ContainerText = styled.div`
   p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 90%px;
    color: #fff;
    margin-bottom: 10px;
    margin-left: -30px;

    span {
      font-weight: 700;
      color: #9758a6;
    }
   }

`;

export const Line = styled.div`
 height: 40px;
 border-right: 0.5px solid #bababa;
`;

export const PageLinkExit = styled.a`
   font-style: normal;
   font-weight: bold;
   font-size: 14px;
   line-height: 16px;
   display: flex;
   align-items: center;
   color: #ff3205;
   cursor: pointer;
`;


