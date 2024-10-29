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

  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then((res)=>setData(res.data.data))
    .then(console.log(data))
  },[])
  return (
    <>
    <div className={styles.ContainerSearchBar}>
      <input type="text" name="" id=""  placeholder="جستجو کالا" className={styles.InputSearch} />
      <img src={SearchIcon} alt="Search Icon" className={styles.IconSearch}/>
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
        <p className={styles.hidenItem}>.</p>
        <p className={styles.hidenItem}>.</p>
        <p className={styles.hidenItem}>.</p>
        <p className={styles.hidenItem}>.</p>
          <p className={styles.PtitleItem}>شناسه کالا</p>
          <p className={styles.PtitleItem}>قیمت</p>
          <p className={styles.PtitleItem}>موجودی</p>
          <p className={styles.PtitleItem}>نام کالا</p>

         

        </div>
            
                {data.map(item=><>
                <div className={styles.item1}>

                     <div className={styles.rightItem}>
                            <img  className={styles.iconsModal} src={trash} alt="trash icon"   onClick={()=>setShowModalDelete(true)}/>
                            <img  className={styles.iconsModal} src={edit} alt="edit icon"  onClick={()=>setShowModalEdit(true)}/>
                      </div>
                      <p className={styles.Pitem} key={item.id}>{item.id}</p>
                      <p className={styles.Pitem} key={item.id}>هزار تومان{item.price}</p>
                      <p className={styles.Pitem} key={item.id}>{item.quantity}عدد</p>
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