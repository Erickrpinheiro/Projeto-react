import { useEffect, useState } from "react"
import { CardStyled } from "./style"


export function Product({img,name,category,price,id,data,pCart,setPCart,setContCart,amountProduts,setAmountProduts}){
    const[cont,setCont]=useState(1)

    useEffect(()=>{
        const product = JSON.parse((localStorage.getItem("@PCART")))
        const quantity= JSON.parse((localStorage.getItem("@AMOUNTP")))
        if(product){
            setPCart(product)
            setAmountProduts(quantity)
            setContCart(quantity.length)
        }
        setContCart(amountProduts.length)
    },[])

    useEffect(()=>{
        if(amountProduts){
            setContCart(amountProduts.length)
        }
    },[addCar])
    
    function addCar(id){
        const item = (data.find(el=> el.id == id))
        for(let i=0;i<cont;i++){
            setAmountProduts((old)=>[...old,item])
            localStorage.setItem('@AMOUNTP',JSON.stringify([...amountProduts,item]))
        }
        const verificar = pCart.filter(el=>el.id == item.id)
        console.log(verificar)
        if(!verificar.length){
            setPCart((olditens)=>[ ...olditens, item])
            localStorage.setItem('@PCART',JSON.stringify([...pCart,item]))
        }
        setCont(1)           
    } 
                       
    function accountantSub(){

        if(cont>=2){
            setCont((old)=> old-1)
        }else{
            setCont(1)
        }
    }

    function accountantSum(){

        setCont((old)=> old+1)
        
    }
    
    return(
        
        <CardStyled key={id}>
            <div>
                <img src={img} />
            </div>
            <div>
                <h2>{name}</h2>
                <span>{category}</span>
                <p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
            <div>
                <button className="subNumber" onClick={()=>accountantSub()}>-</button>
                    <input id={id} value={cont} disabled onInput={(e)=>setCont(e.target.value)}  />
                <button className="sumNumber" onClick={()=>accountantSum()}>+</button>
            </div>
            <button onClick={()=>addCar(id)}>Adicionar</button>
           
        </CardStyled>
    )
}