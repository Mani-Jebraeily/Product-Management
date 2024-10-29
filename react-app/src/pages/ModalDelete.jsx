import React from 'react'
import styles from './ModalDelete.module.css'
import DeleteIcon from '../assets/DeleteIcon.png'


function ModalDelete() {
  return (
    <div className={styles.ModalBackDrop}>
        <div className={styles.Modal}>
            <img src={DeleteIcon} alt="Delete icon" className={styles.DeleteIcon} />
            <p className={styles.Text}>آیا از حذف این محصول مطمئنید؟</p>
            <button className={styles.CloseBtn}>لغو</button>
            <button className={styles.DeleteBtn}>حذف</button>


        </div>
    </div>
  )
}

export default ModalDelete