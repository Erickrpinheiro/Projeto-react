import styled from "styled-components";

export const DivInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    border: 2px solid var(--color-grey-20);
    background-color: var(--color-white);
    border-radius: 8px;
    position: absolute;
    z-index:2;

    div:hover{
    border: 2px solid var(--color-grey-100);
    }

    input{
        height: 60px;
        padding: 0px 10px 0px 15px;
        border:none;
        width:100%;
    }

    input::placeholder{
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: var(--color-grey-100);
        border:none;
    }

    input:focus{
        border: none;
        color: var(--color-grey-300);
    }

    button{
        height: 40px;
        border-radius: 8px;
        padding: 0px 20px ;
        border: 2px solid var(--color-primary);
        background-color: var(--color-primary);
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        color: var(--color-grey-300);
        position: relative;
        margin: 0 10px 0 0;
    }

    button:hover{
        background-color: var(--color-primary-50);
    }

   @media (min-width: 1200px){
        max-width:375px;
        left:59%;
        
}
`;