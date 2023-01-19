import styled from "styled-components";

export const FilterStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap:10px;
    padding-bottom:10px;

    input{
        width: 75px;
        height: 25px;
        padding: 1px 2px;
        border-radius: 5px;
        border: 2px solid var(--color-grey-100);
        background-color: var(--color-grey-100);
        color: var(--color-black);

        ::placeholder{
            color: var(--color-white);
        }
        :active{
            border: 2px solid var(--color-white)
        }
    }

    select{
        width: 82px;
        height: 31px;
        padding: 1px 2px;
        border-radius: 5px;
        border: 2px solid var(--color-grey-100);
        background-color: var(--color-grey-100);
        color: var(--color-white);
    }  
`