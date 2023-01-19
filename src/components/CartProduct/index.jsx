import { ProductCartStyled } from "./style"
import { TiTrash } from "react-icons/ti"

export function CartProduct({pCart,removeProduct,amountProduts}){
   
    function setQuantityItems(id){
        const data = amountProduts.filter(el => el.id == id)
        const quantity = data.length
        return quantity + "X"
    }
    
    return(
        <>
        {pCart.map(el=>
            <ProductCartStyled key={el.id}>
                <div>
                    <img src={el.img} />
                    <div>
                        <h3>{el.name.length<=11? el.name : el.name.slice(0, 11) + "..."}</h3>
                        <p className="ptext">{el.category}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>removeProduct(el.id)}><TiTrash/> </button>
                    <p> {setQuantityItems(el.id)}</p>
                </div>               
            </ProductCartStyled>)}
        </>
    )
}