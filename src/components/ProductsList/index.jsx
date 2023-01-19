import { Product } from "../Product"
import { ListCardsStyled } from "./style"

export function ListProducts({filterProduts,data,pCart,setPCart,setContCart,amountProduts,setAmountProduts,searchOk}){
    
    return( 
        <ListCardsStyled>
            {(filterProduts.length || searchOk)? filterProduts.map( (el) => <Product key={el.id} img={el.img} name={el.name} category={el.category} price={el.price} id={el.id} data={data}
             pCart={pCart} setPCart={setPCart} setContCart={setContCart} amountProduts={amountProduts} setAmountProduts={setAmountProduts}/> ):
            data.map(el=><Product key={el.id} img={el.img} name={el.name} category={el.category} price={el.price} id={el.id} data={data}
             pCart={pCart} setPCart={setPCart} setContCart={setContCart} amountProduts={amountProduts} setAmountProduts={setAmountProduts} />)}
        </ListCardsStyled>
    )
}                                                                        