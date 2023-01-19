import { useEffect } from "react";
import { FilterStyled } from "./style"

export function Filter({maxValueFilter,minValueFilter,setOrderData,orderData,filterProduts,data,setFilterProduts}){

    function orderValue(value){
        setOrderData(value)
        const array = filterProduts.length ? filterProduts : data
        if(value == "menor"){
          const smaller =array.sort(function (a, b) {
            if (a.price > b.price) {
              return 1
            }
            if (a.price < b.price) {
              return -1
            }
            return 0
          });
          setFilterProduts(smaller)
        }
        if(value == "maior"){
          const bigger =array.sort(function (a, b) {
            if (a.price < b.price) {
              return 1
            }
            if (a.price > b.price) {
              return -1
            }
            return 0
          })
          setFilterProduts(bigger)
        }
      }  
    
      useEffect(()=>{
        orderValue(orderData)
      },[orderData])

    return(
        <FilterStyled>
            <input 
            type="number"
            name="MaxValue"
            placeholder="Máx. Valor"
            onChange={(e)=>maxValueFilter(e.target.value)}/>
            <input 
            type="number"
            name="MinValue"
            placeholder="Mín. Valor"
            onChange={(e)=>minValueFilter(e.target.value)}/>
            <select name="ordenar" value={orderData} onInput={(e)=>orderValue(e.target.value)}>
                <option value="">Ordem</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
            </select>
        </FilterStyled>
    )
}