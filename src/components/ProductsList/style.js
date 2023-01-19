import styled from "styled-components"

export const ListCardsStyled = styled.ul`
overflow-x: scroll;
display: flex;
flex-direction: row;
gap:30px;
padding-left: 16px;

@media (min-width: 1200px) {
    overflow-x:none;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 20px auto;
    padding:0px;
    justify-content: space-between;
}
`