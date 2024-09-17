import styled from "styled-components";

export const Container = styled.div`
.carousel-item {
    padding-right: 40px;
}
 
overflow-x: hidden;

.react-multi-carousel-list {
    overflow: visible;
}

.react-multiple-carousel__arrow--left {

    top: 15px;
    left: 2px;
   
}
.react-multiple-carousel__arrow--right {
   
    top: 16px;
}

padding-left: 40px;
padding-bottom: 15px;

`;

export const Title = styled.h2`
font-size: 50px;
font-weight: 800;
color: #61A120;
padding-bottom: 12px;
position: relative;
text-align: center;
margin: 70px 0;

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 7px;
    background-color: #61A120;
    left: calc( 50% - 28px);
}


`;



/*export const ContainerItems = styled.div`
background: url('${props => props. imageUrl}');
background-position: center;
background-size: cover;
border-radius: 20px;

display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 250px;

p {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius:30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;

}
`;*/
