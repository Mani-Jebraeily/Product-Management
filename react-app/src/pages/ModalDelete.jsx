import React, { useState } from 'react'
import styles from './ModalDelete.module.css'
import DeleteIcon from '../assets/DeleteIcon.png'


function ModalDelete({setShowModalDelete}) {
  const[id,setId]=useState(2)

  const deleteItemHandeler= async()=>{
    try{
      const response= await  axios.delete(`http://localhost:3000/products/${id}`)
      console.log(response.status)
      setShowModalDelete(false)
   
    }catch(error){
      alert("خطا رخ داده است!!!")
      console.log("Error",error.message)
      setShowModalDelete(false)

    }
   
  }
  return (
    <div className={styles.ModalBackDrop}>
        <div className={styles.Modal}>
            <img src={DeleteIcon} alt="Delete icon" className={styles.DeleteIcon} />
            <p className={styles.Text}>آیا از حذف این محصول مطمئنید؟</p>
            <button className={styles.CloseBtn} onClick={()=>setShowModalDelete(false)}>لغو</button>
            <button className={styles.DeleteBtn}onClick={deleteItemHandeler}>حذف</button>


        </div>
    </div>
  )
}

export default ModalDelete