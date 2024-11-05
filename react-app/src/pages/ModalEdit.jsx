import React, { useState } from 'react'
import styles from './ModalEdit.module.css'

function ModalEdit({setShowModalEdit}) {
  const[name,setName]=useState("")
  const[price,setPrice]=useState("")
  const[ quantity,setQuantity]=useState("")

  const editItemHandeler= async()=>{
    try{
      const response= await  axios.put(`http://localhost:3000/products/${id}`,{name,price,quantity})
      console.log(response.status)
      setShowModalEdit(false)
   
    }catch(error){
      alert("خطا رخ داده است!!!")
      console.log("Error",error.message)
      setShowModalEdit(false)

    }
   
  }
  return (
    <div className={styles.ModalBackDrop}>
    <div className={styles.Modal}>
       <h1 className={styles.title}>ویرایش اطلاعات</h1> 
       <label htmlFor=""className={styles.labels}>نام کالا</label>                             
       <input type="text" name="" id="" placeholder="fetch" className={styles.inputs} value={name} onChange={(e)=>setName(e.target.value)}/>      

       <label htmlFor="" className={styles.labels}>تعداد موجودی</label>                       
       <input type="text" name="" id="" placeholder='fetch'className={styles.inputs}value={quantity} onChange={(e)=>setQuantity(e.target.value)} />           
       
       <label htmlFor="" className={styles.labels}>قیمت</label>                                
       <input type="text" name="" id="" placeholder='fetch' className={styles.inputs} value={price} onChange={(e)=>setPrice(e.target.value)}/>        
       
       <div className={styles.Buttons}>
          <button className={styles.AddButton} onClick={editItemHandeler}>ثبت اطلاعات جدید</button>   
          <button className={styles.CloseButton} onClick={()=>setShowModalEdit(false)}>انصراف</button>   
       </div>
        
    </div>


</div>
    
  )
}

export default ModalEdit