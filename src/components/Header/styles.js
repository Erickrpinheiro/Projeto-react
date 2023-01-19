import styled from "styled-components"

export const HeaderStyled = styled.header`
display:flex;
align-items: center;
justify-content: space-between;
gap: 18px;
padding: 30px 0px ;
background-color: var(--color-primary);

.logo{
    display: flex;
    gap:5px;
    align-items: center;

    h1{
    font-size:40px;
    font-family:'Trebuchet MS', sans-serif;
    font-weight:800;
    letter-spacing : -2px; 
    }
}

button{
    background-color:transparent;
    border:none;
}

.open_cart{
    padding: 2px 6px;
    min-height: 24px;
    min-width: 20px;
    border-radius: 7px;
    background-color: green;
    position: relative;
    z-index: 1;
    top: -44px;
    left: 62px;
    font-size: 15px;
    font-weight: 900;
    color: white;
}

img{
    width: 100px;
    height: 100px;
}

svg{
    font-size:30px;
}

@media (min-width: 425px){
    .open_cart{
    padding: 2px 6px;
    min-height: 24px;
    min-width: 20px;
    border-radius: 7px;
    background-color: green;
    position: relative;
    z-index: 1;
    top: -26px;
    left: -21px;
    font-size: 14px;
    font-weight: 900;
    color: white;
    }
}

@media (min-width: 1200px){
flex-direction: row;
justify-content: space-between;
max-width:1200px ;
margin: 0 auto;
padding: 30px 0;

.open_cart{
    padding: 2px 6px;
    min-height: 24px;
    min-width: 20px;
    border-radius: 7px;
    background-color: green;
    position: relative;
    z-index: 1;
    top: -26px;
    left: -21px;
    font-size: 14px;
    font-weight: 900;
    color: white;
}
}
`;