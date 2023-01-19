import styled from 'styled-components'

export const DivProfileStyled = styled.div`
    background-color: var(--color-grey-4);
    padding-bottom:46px;
    height: 100vh;   

    @media (min-width: 500px) {
        .div_identifier{
            width: 100%;
            border-top: 1px solid var(--color-grey-3);
            border-bottom: 1px solid var(--color-grey-3);            
        }
    }
`
export const DivAppStyled = styled.div`

@media (min-width: 1200px){
    display: flex;
    max-width:1400px ;
    margin: 0 auto;
    justify-content: space-between;
    position: relative;
    top:250px;

}
`
export const DivCartStyled = styled.div`

@media (min-width: 1200px){
width:28%;
    
}
`
export const DivHeaderStyled = styled.div`

@media (min-width: 1200px){
width:100%;
background-color: var(--color-primary);
position: fixed;
z-index: 2;
    
}

`