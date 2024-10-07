import styled from "styled-components";
import FundoClaro from '../../assets/backgroudbr.svg';
import BannerHome from '../../assets/home.svg';




export const Banner = styled.div`
   background: url('${ BannerHome}');
   background-size: cover;
   background-position: center;
   height: 480px;

   h1 {
      font-family: 'Road Rage', sans-serif;
      font-size: 60px;
      color: #FFFF00;
      position: absolute;
      right: 63%;
      top: 70px;

   }
`;

export const Container = styled.section`

 background: linear-gradient(
   rgba(255, 255, 255, 0.1),
   rgba(255, 255, 255, 0.0)
 ),
 url('${FundoClaro}');

 
`;

/*export const Content = styled.div` 
padding-bottom: 70px;
`;*/

