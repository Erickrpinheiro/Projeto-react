import { TotalStyled } from "./style"

export function CartTotal({deleteArray,total}){

    return(
       <TotalStyled >
        <div>
            <h5>Total</h5>
            <span className="Total_Value">{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        </div>
        <button onClick={()=>deleteArray()}>Remover Todos</button>

       </TotalStyled >
    )
}