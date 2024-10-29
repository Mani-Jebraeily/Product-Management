import React, { useState } from 'react'
import Union from '../assets/Union.png'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")



  const loginHandeler=()=>{
    axios.post("http://localhost:3000/auth/login",{username,password})
    .then((res)=>console.log(res))
    setPassword("")
    setUsername("")
  }
  return (
    
        <>
    <h1 className={styles.title}>بوت کمپ بوتواستارت</h1>
     <div className={styles.container}>
      <form onSubmit={loginHandeler} className={styles.form}>
      <img src={Union} alt="logo picture"  className={styles.logo} />
      <h1 className={styles.titleForm}>فرم ورود</h1>
        <input type="text" name="" id="4" className={styles.inputs} value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='نام کاربری' /><br />
        <input type="password" name="" id="5" className={styles.inputs} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='رمز عبور'/><br />
        <Link to="/products">
        <button type="submit" onClick={loginHandeler} className={styles.btn}>ورود</button><br />
        </Link>

        <Link to='/'>
        <a href="" className={styles.link}>!ایجاد حساب کاربری</a>
        </Link>
      </form>
     </div>
    
    </>

  )
}

export default Login