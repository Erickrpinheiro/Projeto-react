import { DivInput } from "./style"

export function InputSearch({setSearch,searchProducts}){
    
    return(
        <DivInput>
            <input 
            type="text"
            name="Pesquisa"
            placeholder="Digitar Pesquisa"
            onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={()=>searchProducts()}>Pesquisar</button>
        </DivInput>
    )
}