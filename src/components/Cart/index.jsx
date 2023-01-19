import { CartEmpty } from "../CartEmpty"
import { CartProduct } from "../CartProduct"
import { CartTotal } from "../CartTotal"
import { CartUlStyled } from "./style"

export function Cart({pCart,setModalOpen,removeProduct,deleteArray,total,amountProduts}){

    return(
        <CartUlStyled>
            <header>
                <h2 className="title-car">Carrinho de compras</h2>
                <button onClick={()=>setModalOpen(false)}>X</button>
            </header>
            <ul>
                {(!pCart.length)? <CartEmpty/>: <CartProduct pCart={pCart} removeProduct={removeProduct} amountProduts={amountProduts} />}
            </ul>
            {pCart.length?<CartTotal deleteArray={deleteArray} total={total} />:""}
        </CartUlStyled>


    )
   

}