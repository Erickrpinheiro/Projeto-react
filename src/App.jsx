import { GlobalStyle } from "./style/global"
import { DivAppStyled, DivHeaderStyled,DivProfileStyled } from "./style/style"
import { useEffect, useState } from "react"
import { ListProducts } from "./components/ProductsList"
import { Header } from "./components/Header"
import { Filter } from "./components/filterProduts"

function App() { 
  const dataBase = [
    {
        id: 1,
        name: "Traje para baixas temperaturas",
        category:"Traje pesquisa",
        price:5600,
        img: "https://meiobit.com/wp-content/uploads/2017/01/20170126c7ca18994f8e96755515d33420543436.jpg"
    },
    {
        id: 2,
        name: "Traje alta visibilidade",
        category:"Traje casual",
        price:2000,
        img: "https://2.bp.blogspot.com/-u1rEZUHg2BE/V2rVSOZ7XwI/AAAAAAAAaGI/8aalSuNhGnYKe2x4IzLmDbbOPOUI4uL5gCLcB/s1600/Astronauta%2Bcom%2Bo%2Btraje%2BACES.jpg"
    },
    {
        id: 3,
        name: "Traje altas gravidades",
        category: "Traje pesquisa",
        price:5550,
        img: "https://i.pinimg.com/474x/f5/0c/20/f50c20d6ada4c50c71cb84a9a19db669--space-suits-nasa-space.jpg"
    },
    {
        id: 4,
        name: "Traje missão apollo",
        category: "Traje pesquisa",
        price:8060,
        img: "https://tecnodefesa.com.br/wp-content/uploads/2019/01/WhatsApp-Image-2019-01-20-at-19.58.08-2-768x1024.jpeg"
    },{
        id: 5,
        name: "Traje de exploração",
        category: "Traje pesquisa",
        price:3500,
        img: "https://i.pinimg.com/736x/fe/eb/3c/feeb3c324eed29064ee17653a44e4297.jpg"
    },
    {
        id: 6,
        name: "Traje combate pesado",
        category: "Traje combate",
        price:9600,
        img: "https://i.pinimg.com/originals/d8/ec/f8/d8ecf8ea1f982dffe6dd5b081233431e.jpg"
    },
    {
        id: 7,
        name: "Traje dark",
        category: "Traje casual",
        price:7800,
        img: "https://tse4.mm.bing.net/th?id=OIP.Fzuv6J24YVeEkiGIltDBBgAAAA&pid=Api&P=0"
    },
    {
        id: 8,
        name: "Traje missões arriscadas",
        category: "Traje pesquisa",
        price:8900,
        img: "https://i.pinimg.com/originals/d2/30/f2/d230f2ad03b545394744ce0cd2cc8f70.jpg"
    },
    {
        id: 9,
        name: "Traje combate ultra",
        category: "Traje combate",
        price:9900,
        img: "https://k45.kn3.net/taringa/2/2/9/9/3/8/86/patriota20/753.jpg?2457"
    },
    {
        id: 10,
        name: "Traje retrô",
        category: "Traje pesquisa" ,
        price:6000,
        img: "https://mega.ibxk.com.br/2015/03/13/13145513018745.jpg?ims=610x"
    },
    {
        id: 11,
        name: "Traje retrô",
        category: "Traje casual",
        price:7000,
        img: "https://i.pinimg.com/736x/30/7f/63/307f638c8024773b6288816c49fff891.jpg"
    },
    {
        id: 12,
        name: "Traje slim",
        category: "Traje casual",
        price:4000,
        img: "https://mega.ibxk.com.br/2015/03/13/13151037387801.jpg?ims=610x"
    }]
  const[data,setData]=useState(dataBase)
  const [pCart,setPCart] = useState([])
  const [filterProduts,setFilterProduts]= useState([])
  const [amountProduts,setAmountProduts]= useState([])
  const [search,setSearch]= useState("")
  const [contCart,setContCart]= useState(0)
  const [modalOpen,setModalOpen]=useState(false)
  const [searchOpen,setSearchOpen]=useState(false)
  const [searchOk,setSearchOk]=useState(false)
  const [valueInputMax,setValueInputMax] = useState("")
  const [valueInputMin,setValueInputMin] = useState("")
  const[orderData,setOrderData]=useState("")

  useEffect(()=>{
    function start(){
      setData(dataBase)
    }
    start()   
  },[])
 
  function removeProduct(id){
      const idP = Number(id)
      const itens = amountProduts.filter( el => el.id != id)
      const item = pCart.filter(el=>el.id!==idP)
      setPCart(item)
      setAmountProduts(itens)
      setContCart(itens.length)
      localStorage.setItem('@PCART',JSON.stringify(item))
      localStorage.setItem('@AMOUNTP',JSON.stringify(itens))
  }
  const total = amountProduts.reduce((soma,atual)=> soma + (atual.price),0)
  
  function deleteArray(){
      setPCart([])
      setContCart(0)
      setAmountProduts([])
      localStorage.removeItem("@PCART")
      localStorage.removeItem("@AMOUNTP")
  }
  
  function openModal(){
      setModalOpen(true)
  }

  function searchProducts(){
      const text = search.toLocaleLowerCase()
      const itens = data.filter(el => (el.name.toLocaleLowerCase()).includes(text) || (el.category.toLocaleLowerCase()).includes(text))
      if(!itens.length){
          setFilterProduts([])
      }else{
        setFilterProduts(itens)
        setSearchOpen(false)
      }
  }

  function maxValueFilter(value){
    setValueInputMax(value)
    const filter = data.filter(el => el.price < value && el.price > valueInputMin )
    if(!filter.length){
      setSearchOk(true)
      setFilterProduts([])
    }else{
      setFilterProduts(filter)
    }
    if( value == ""  && valueInputMin == ""){
      setFilterProduts(data)
    }
  }

  function minValueFilter(value){
    setValueInputMin(value)
    let filter = []
    if(valueInputMax != ""){
      filter = data.filter(el => el.price > value && el.price < valueInputMax)
    }else{
      filter = data.filter(el => el.price > value )
    }
    if(!filter.length){
      setSearchOk(true)
      setFilterProduts([])
    }else{
      setFilterProduts(filter)
    }
    if( value == ""  && valueInputMax == ""){
      setFilterProduts(data)
    }
  }
                           
  return(  
    <>    
      <GlobalStyle/>                                
      <DivProfileStyled>                       
        <DivHeaderStyled>
          <Header modalOpen={modalOpen} searchOpen={searchOpen} setSearchOpen={setSearchOpen}
          openModal={openModal} contCart={contCart} pCart={pCart}  removeProduct={removeProduct}
          setSearch={setSearch} searchProducts={searchProducts} deleteArray={deleteArray} total={total}
           setModalOpen={setModalOpen} amountProduts={amountProduts} />
           <Filter maxValueFilter={maxValueFilter} minValueFilter={minValueFilter} setOrderData={setOrderData} orderData={orderData} filterProduts={filterProduts} data={data} setFilterProduts={setFilterProduts} />
        </DivHeaderStyled>
        <DivAppStyled>
          <ListProducts filterProduts={filterProduts} data={data} pCart={pCart} setPCart={setPCart} setContCart={setContCart} amountProduts={amountProduts} setAmountProduts={setAmountProduts} searchOk={searchOk}/>
        </DivAppStyled>
      </DivProfileStyled>
    </>  
  )
}

export default App;
