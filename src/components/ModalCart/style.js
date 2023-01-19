import styled from 'styled-components'


export const SectionStyled = styled.section`
    width: 100%;
    height:100vh;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;

    .modal{
    margin: 0px 12px 0 12px;
    width:100%;
    background-color:white;
    border-radius: 8px;
    

    }

    @media (min-width:500px){
        .modal{
            margin: 0 auto;
            width:100%;
            max-width:370px;
            
        }
    }
`
