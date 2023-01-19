import styled from "styled-components"

export const CardStyled = styled.li`
    width: 250px;
    min-width:200px;
    border-radius: 8px;
    list-style: none;
    border: .5px solid var(--color-grey-100);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:20px;
    box-shadow: 0px 4px 4px 0px #00000040;

    >div:nth-child(1){
        img{
            background-color: var(--color-grey-0);
            width: 100%;
            height: 200px;
            min-height:150px;
            border-radius: 8px 8px 0 0 ;
        }
    }

    >div:nth-child(2){
        background-color: var(--color-grey-0);
        width: 100%;
        display:flex;
        justify-content: center;
        flex-direction: column;
        gap:5px;  

        span{
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        padding-left:20px;
        color: var(--color-grey-50);
        }

        h2{
        font-family: Inter;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        padding: 0 20px;
        color:var(--color-grey-600);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        }

        p{
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        padding-left:20px;
        color: var(--color-primary);
        }
    }

    >div:nth-child(3){
        width:100%;
        height: 20px;
        display: flex;
        justify-content:center;  
        gap: 5px; 

        input{
            font-family: Inter;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0em;
            padding:0;
            color: var(--color-grey-50);
            text-align:center;
            width: 10%;
            border:none;

            :disabled{
                background-color: var(--color-white)
            }
        }
    }

    .subNumber{
        height: 20px;
        width: 30px;
        border-radius: 4px;
        padding: 0px 10px 0px 10px;
        border: 1px solid var(--color-negative);
        background-color: var(--color-white);
        color: var(--color-negative);
        vertical-align:center;
        margin:0;
        
        :hover{
            background-color: var(--color-negative);
            border: 1px solid var(--color-negative);
            color: var(--color-white);
        }
    }
    
    .sumNumber{
        height: 20px;
        width: 30px;
        border-radius: 4px;
        padding: 0px 10px 0px 10px;
        border: 1px solid var(--color-sucess);
        background-color: var(--color-white);
        color: var(--color-sucess);
        margin:0;

        :hover{
            background-color: var(--color-sucess);
            border: 1px solid var(--color-sucess);
            color: var(--color-white);
        }
    }

    >button{
        height: 40px;
        border-radius: 8px;
        padding: 0px 20px 0px 20px;
        border: 2px solid var(--color-grey-100);
        background-color: var(--color-grey-100);
        color: var(--color-white);
        margin: 0 20px 10px 20px;
        cursor: pointer;

        :hover{
        border: 2px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-white);
        }
    }
    
`