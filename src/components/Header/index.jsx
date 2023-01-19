import { HeaderStyled } from "./styles"
import Logo from "../../assets/Logo.png"
import { ModalCart } from "../ModalCart"
import { InputSearch } from "../InputSearch"
import { MdSearch,MdShoppingCart } from "react-icons/md"

export function Header({modalOpen,searchOpen,setSearchOpen,openModal,contCart,pCart,removeProduct,setSearch,searchProducts,deleteArray,total,setModalOpen,amountProduts}){
    
    return(                                   
        <HeaderStyled>
            {searchOpen && <InputSearch setSearch={setSearch} searchProducts={searchProducts} />}
            <div className="logo">
                <img src={Logo} />
                <h1>Space Store</h1> 
            </div>
            <div className='div_buttons'>
                <button className='div_seach' onClick={()=>setSearchOpen(true)}><MdSearch/></button>
                <button className='div_cart'  onClick={()=>openModal()}><MdShoppingCart/></button>
                <span className='open_cart'>{contCart}</span>
            </div>
            {modalOpen && <ModalCart pCart={pCart} removeProduct={removeProduct} deleteArray={deleteArray} total={total} setModalOpen={setModalOpen} amountProduts={amountProduts} />}
        </HeaderStyled>
    )


}