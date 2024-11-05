import React, { useState } from 'react'
import Union from '../assets/Union.png'
import styles from './Login.module.css'
import { Link,Route,redirect } from 'react-router-dom'
import axios from 'axios'


function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [showError,setShowError]=useState("")
  const [login,setLogin]=useState(false)
  const login1=false;





  const loginHandeler= async()=>{
    try{
      if(!username||!password)return alert("Username and Password is Necessary!!!")
      const response=await  axios.post("http://localhost:3000/auth/login",{username,password})
    console.log(response.status)
      if(response.status===200||response.status===201){
        window.location.replace("http://localhost:5173/products");
      }
    }catch(error){
      console.log("Error :",error.message)
      setShowError(error.response?.status || 500);
    }

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
        {showError&&<p className={styles.ErrorText}>نام کاربری یا رمز عبور اشتباه است</p>}
        <Link to=''>
        <button  type="submit" onClick={loginHandeler} className={styles.btn}>ورود</button><br />
        </Link>

        <Link >
        <a href="" className={styles.link}>!ایجاد حساب کاربری</a>
        </Link>

      </form>
     </div>
    
    </>

  )
}

export default Login