import styled from "styled-components"

export const TotalStyled = styled.div`
    background-color: var(--color-grey-0);
    border-radius: 0 0 5px 5px;
    div{
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin: 0 19px;
        border-top: 2px solid var(--color-grey-20);
    }

    h5{
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: black;
        
    }

    .Total_Value{
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--color-grey-50);
    }

    button{
        height: 60px;
        width: 90%;
        border-radius: 8px;
        margin:10px 19px 20px 19px;
        border: 2px solid var(--color-primary);
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        color: var(--color-grey-50);
        background-color:var(--color-primary);
    }
`