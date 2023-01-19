import styled from "styled-components";

export const ProductCartStyled = styled.li`
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    margin:0 19px;
    background-color: var(--color-grey-0);
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 1px solid #68757017;
    border-radius: 5px;

    img{
        width: 70px;
        height: 70px;
        background-color: var(--color-grey-100);
        border-radius: 5px;
    }

    .delete_img{
        width: 16px;
        height: 16px;
    }

    div:nth-child(1){
        display: flex;
        align-items: flex-start;
        gap: 10px;
        
        div:nth-child(2){
        display: flex;
        flex-direction:column;
        align-items: flex-start;
        gap: 5px;
        }
    }

    div:nth-child(2){
        display: flex;
        flex-direction:column;
        align-items: center;
        gap: 5px;
    }

    h3{
        font-family: Inter;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--color-grey-600);

    }

    p{
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color: black;
    }
    
    button{
        width: min-content;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`