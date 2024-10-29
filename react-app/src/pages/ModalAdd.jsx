import React from 'react'
import styles from './ModalAdd.module.css'
import axios from 'axios'
import { useState } from 'react'


function ModalAdd({setShowModalAdd}) {
  const [name,setName]=useState("")
  const [quantity,setQuantity]=useState("")
  const [price,setPrice]=useState("")

  const addItemHandeler=()=>{
    axios.post("http://localhost:3000/products",{name,price,quantity})
    .then((res)=>console.log(res))
    setName("")
    setQuantity("")
    setPrice("")
    setShowModalAdd(false)
  }
  return (
    <div className={styles.ModalBackDrop}>
        <div className={styles.Modal}>
           <h1 className={styles.title}>ایجاد محصول جدید</h1> 
           <label htmlFor=""className={styles.labels}>نام کالا</label>                             
           <input type="text" name="" id="" placeholder='نام کالا' value={name} onChange={(e)=>setName(e.target.value)} className={styles.inputs}/>      

           <label htmlFor="" className={styles.labels}>تعداد موجودی</label>                       
           <input type="text" name="" id="" placeholder='تعداد' value={quantity} onChange={(e)=>setQuantity(e.target.value)} className={styles.inputs} />           
           
           <label htmlFor="" className={styles.labels}>قیمت</label>                                
           <input type="text" name="" id="" placeholder='قیمت' value={price} onChange={(e)=>setPrice(e.target.value)}  className={styles.inputs}/>        
           
           <div className={styles.Buttons}>
              <button className={styles.AddButton} onClick={addItemHandeler}>ایجاد</button>   
              <button className={styles.CloseButton} onClick={()=>setShowModalAdd(false)}>انصراف</button>   
           </div>
        </div>
    </div>
  )
}

export default ModalAdd