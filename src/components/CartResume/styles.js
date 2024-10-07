import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
padding: 15px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;

.container-top {
  
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas: 
    'title title'
    'items  items-price'
    'delivery-tax delivery-tax-price '
    ;


.title {
   width: 100%;
   height: 40px;
   grid-area :title ;
   margin-bottom: 20px;
   color: #ffffff;
   background-color: black;
   border-radius: 15px 0 ;
   text-align: center;
}

.items {
   grid-area :items;
}

.items-price {
   grid-area :items-price ;
}

.delivery-tax {
   grid-area :delivery-tax;
}

.delivery-tax-price {
   grid-area :delivery-tax-price;
}

}
.container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
}
`;

