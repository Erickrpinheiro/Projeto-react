import { Cart } from "../Cart"
import {SectionStyled} from "./style"


export function ModalCart({pCart,removeProduct,deleteArray,total,setModalOpen,amountProduts}){

    return(                              
        <SectionStyled>
            <div className="modal">
                <Cart pCart={pCart} setModalOpen={setModalOpen} removeProduct={removeProduct} deleteArray={deleteArray} total={total} amountProduts={amountProduts} />
            </div>
        </SectionStyled>
    )
}