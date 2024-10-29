import React from 'react'
import styles from './ModalEdit.module.css'

function ModalEdit({setShowModalEdit}) {
  const editHandeler=()=>{
    setShowModalEdit(false)

  }
  return (
    <div className={styles.ModalBackDrop}>
    <div className={styles.Modal}>
       <h1 className={styles.title}>ویرایش اطلاعات</h1> 
       <label htmlFor=""className={styles.labels}>نام کالا</label>                             
       <input type="text" name="" id="" placeholder="fetch" className={styles.inputs}/>      

       <label htmlFor="" className={styles.labels}>تعداد موجودی</label>                       
       <input type="text" name="" id="" placeholder='fetch'className={styles.inputs} />           
       
       <label htmlFor="" className={styles.labels}>قیمت</label>                                
       <input type="text" name="" id="" placeholder='fetch' className={styles.inputs}/>        
       
       <div className={styles.Buttons}>
          <button className={styles.AddButton} onClick={editHandeler}>ثبت اطلاعات جدید</button>   
          <button className={styles.CloseButton} onClick={()=>setShowModalEdit(false)}>انصراف</button>   
       </div>
        
    </div>


</div>
    
  )
}

export default ModalEdit