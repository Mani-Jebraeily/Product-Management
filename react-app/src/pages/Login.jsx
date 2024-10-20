import React, { useState } from 'react'
import Union from '../assets/Union.png'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'


function Login() {
  const [username,UseUsername]=useState("")
  const [password,UsePassword]=useState("")

  console.log({username,password})


  const loginHandeler=()=>{
    console.log({username,password})
  }
  return (
    
        <>
    <h1 className={styles.title}>بوت کمپ بوتواستارت</h1>
     <div className={styles.container}>
      <form action="" className={styles.form}>
      <img src={Union} alt="logo picture"  className={styles.logo} />
      <h1 className={styles.titleForm}>فرم ورود</h1>
        <input type="text" name="" id="" className={styles.inputs} onChange={(e)=>UseUsername(e.target.value)} placeholder='نام کاربری' /><br />
        <input type="password" name="" id="" className={styles.inputs} onChange={(e)=>UsePassword(e.target.value)} placeholder='رمز عبور'/><br />
        <button onClick={loginHandeler} className={styles.btn}>ورود</button><br />
        <Link to='/'>
        <a href="" className={styles.link}>!ایجاد حساب کاربری</a>
        </Link>
      </form>
     </div>
    
    </>

  )
}

export default Login