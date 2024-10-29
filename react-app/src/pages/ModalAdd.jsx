import React from 'react'
import styles from './ModalAdd.module.css'

function ModalAdd({setShowModalAdd}) {
  return (
    <div className={styles.ModalBackDrop}>
        <div className={styles.Modal}>
           <h1 className={styles.title}>ایجاد محصول جدید</h1> 
           <label htmlFor=""className={styles.labels}>نام کالا</label>                             
           <input type="text" name="" id="" placeholder='نام کالا' className={styles.inputs}/>      

           <label htmlFor="" className={styles.labels}>تعداد موجودی</label>                       
           <input type="text" name="" id="" placeholder='تعداد'className={styles.inputs} />           
           
           <label htmlFor="" className={styles.labels}>قیمت</label>                                
           <input type="text" name="" id="" placeholder='قیمت' className={styles.inputs}/>        
           
           <div className={styles.Buttons}>
              <button className={styles.AddButton}>ایجاد</button>   
              <button className={styles.CloseButton} onClick={()=>setShowModalAdd(false)}>انصراف</button>   
           </div>
        </div>
    </div>
  )
}

export default ModalAdd