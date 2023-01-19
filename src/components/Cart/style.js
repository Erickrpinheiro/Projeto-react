import styled from "styled-components"

export const CartUlStyled = styled.section`
    max-height: 500px;
    display: flex;
    flex-direction: column;
    padding:0;
    background-color: var(--color-grey-0);
    gap:20px;
    margin: 0 0;
    border-radius: 5px 5px 0px 0px;
    width: 100%;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-primary);
        padding: 15px 19px;
        border-radius: 5px 5px 0px 0px;
    
        button{
        background-color: transparent;
        border: none;
        color: #FFFFFF80;
        }

        h2{
        background: var(--color-primary);
        font-family: Inter;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--color-white);
        display: flex;
        align-items: center;
        margin:0 0;
        }
    }
    
    ul{
        overflow-y:scroll;
        display: flex;
        flex-direction: column;
        gap:10px;
    }
    
    @media (min-width: 1200px) {
        width: 100%;
        padding:0;
    }

`