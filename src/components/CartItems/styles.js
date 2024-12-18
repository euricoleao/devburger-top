import styled from "styled-components";


export const Container = styled.div`

background-color: #ffff;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
margin-top: -27px;
margin-right: 10px;



`;

export const Header = styled.div`
background-color: black;
border-radius: 15px 0 ;
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 10px 15px;
border-bottom: 1px solid #b5b5b5;
width:max-content;
gap: 65px;

p{    

    font-size: 16px;
    color: #ffffff;
    
 
    
}


 
`;


export const Body = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
width:100%;
padding: 10px;
grid-gap: 10px 10px;

img {
    border-radius: 10px;
    width: 120px;
}
p{
    font-size: 16px;
   color: #2B2424FF;
   text-align: center;
   margin-top: 40px;
   
  
}

.quantity-container {
   display :flex ;
   gap: 20px;
   margin-top: 35px;
   margin-left: 18px;
   
   

   

   button {
    height: 30px;
    width: 30px;
    border-radius: 4px;
    background-color:#9758a6 ;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #fff;
    transition: all 0.4s;
   
    &:hover {
        background-color: #6f357c;
    }
   }
   p{
    margin-top: 5px;
   }

}
`;


export const Button = styled.div`
img {
    width: 30px;
    margin-left: 35px;
    margin-top: 35px;
    cursor: pointer;
}
`;



export const EmptyCart = styled.div`

text-align: center;
font-weight: bold;
font-size: 35px;
margin-top: 30px;
background-color: #C6D447FF;
height: 300px;
align-items: center;
img {
   display: flex;
   align-items: center;
   margin: 45px 420px;
   width: 100px;
   
    
   
    
    
   
}

`;