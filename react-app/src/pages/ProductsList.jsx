import React, { useState ,createContext,useEffect} from 'react'
import SearchIcon from "../assets/SearchIcon.png"
import styles from "./ProductsList.module.css"
import SettingIcon from "../assets/settingIcon.png"
import trash from '../assets/trash.png'
import edit from '../assets/edit.png'
import ModalAdd from './ModalAdd'
import axios from 'axios'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'

function ProductsList() {
  const [showModalAdd,setShowModalAdd]=useState(false)
  const [showModalDelete,setShowModalDelete]=useState(false)
  const [showModalEdit,setShowModalEdit]=useState(false)
  const [data,setData]=useState([])
  const [data2,setData2]=useState([])
  const[search,setSearch]=useState([])

   
  const searchHandeler=()=>{
    if(search){
      const newItem=data.filter(item=>item.name.toLowerCase().includes(search))
      setData2(newItem)
    }else{
      setData2("")
    }
  
  }

  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then((res)=>setData(res.data.data))
    .then(console.log(data))
  },[])

  return (
    <>
    <div className={styles.ContainerSearchBar}>
      <input type="text" name="" id=""  placeholder="جستجو کالا" className={styles.InputSearch} value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase().trim())}/>
      
      <img src={SearchIcon} alt="Search Icon" className={styles.IconSearch} onClick={searchHandeler}/>
  
      
    </div>

    <div className={styles.ContainerAddBtn}>
      <button className={styles.BtnAddProducts} onClick={()=>setShowModalAdd(true)}>افزودن محصول</button>
      {showModalAdd&&<ModalAdd setShowModalAdd={setShowModalAdd}/>}
      {showModalDelete&&<ModalDelete setShowModalDelete={setShowModalDelete} />}
      {showModalEdit&&<ModalEdit setShowModalEdit={setShowModalEdit} />}
      <div className={styles.rightSide}>
        <h1 className={styles.h1ProductManeger}>مدیریت کالا</h1>
        <img src={SettingIcon} alt="setting icon" className={styles.IconSetting} />
      </div>
    </div>
    <div className={styles.items}>
      
       <div className={styles.item}>

        <div className={styles.titleItem}>
        <p className={styles.hidenItem} key={10}>.</p>
        <p className={styles.hidenItem} key={20}>.</p>
        <p className={styles.hidenItem} key={30}>.</p>
        <p className={styles.hidenItem} key={40}>.</p>
          <p className={styles.PtitleItem} key={50}>شناسه کالا</p>
          <p className={styles.PtitleItem} key={60}>قیمت</p>
          <p className={styles.PtitleItem} key={70}>موجودی</p>
          <p className={styles.PtitleItem} key={80}>نام کالا</p>

        </div>

        {data2.length?
              data2.map(item=><>
                <div className={styles.item1}>

                     <div className={styles.rightItem}>
                            <img  className={styles.iconsModal} src={trash} alt="trash icon"   onClick={()=>setShowModalDelete(true)}/>
                            <img  className={styles.iconsModal} src={edit} alt="edit icon"  onClick={()=>setShowModalEdit(true)}/>
                      </div>
                      <p className={styles.Pitem} key={item.id}>{item.id}</p>
                      <p className={styles.Pitem} key={item.id}>{item.price}تومان</p>
                      <p className={styles.Pitem} key={item.id}>{item.quantity}</p>
                      <p className={styles.Pitem} key={item.id}>{item.name}</p>
                 </div>
                 </>
               )
        
        :
        data.map(item=><>
          <div className={styles.item1}>

               <div className={styles.rightItem}>
                      <img  className={styles.iconsModal} src={trash} alt="trash icon"   onClick={()=>setShowModalDelete(true)}/>
                      <img  className={styles.iconsModal} src={edit} alt="edit icon"  onClick={()=>setShowModalEdit(true)}/>
                </div>
                <p className={styles.Pitem} key={item.id}>{item.id}</p>
                <p className={styles.Pitem} key={item.id}>{item.price}تومان</p>
                <p className={styles.Pitem} key={item.id}>{item.quantity}</p>
                <p className={styles.Pitem} key={item.id}>{item.name}</p>
           </div>
           </>
         )}
        
            
      
       </div>
    </div>
    
    </>
  )
}

export default ProductsList