import React, { useState } from 'react'
import Union from '../assets/Union.png'
import styles from './SignIn.module.css'
import { Link } from 'react-router-dom'

function SignIn() {
  const [username,UseUsername]=useState("")
  const [password,UsePassword]=useState("")
  const [cofirmPassword,UseConfirmPassword]=useState("")
  console.log(styles)
  
  
  const registerHandeler=()=>{
    console.log({username,password,cofirmPassword})
  }
  return (
    <>
    <h1 className={styles.title}>بوت کمپ بوتواستارت</h1>
     <div className={styles.container}>
      <form action="" className={styles.form}>
        <img src={Union} alt="logo picture"  className={styles.logo}/>
        <h1 className={styles.titleForm}>فرم ثبت نام</h1>
        <input type="text" name="" id="" className={styles.inputs} onChange={(e)=>UseUsername(e.target.value)} placeholder='نام کاربری' /><br />
        <input type="password" name="" id="" className={styles.inputs} onChange={(e)=>UsePassword(e.target.value)} placeholder='رمز عبور'/><br />
        <input type="password" name="" id="" className={styles.inputs} onChange={(e)=>UseConfirmPassword(e.target.value)} placeholder='تکرار رمز عبور'/><br />
        <button onClick={registerHandeler} className={styles.btn}>ثبت نام</button><br />
        <Link to='./Login' className={styles.link}>
        حساب کاربری دارید؟
        </Link>
      </form>
     </div>
    
    </>

  )
}

export default SignIn