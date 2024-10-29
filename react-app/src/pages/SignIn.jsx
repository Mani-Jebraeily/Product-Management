import React, { useState,useEffect} from 'react'
import Union from '../assets/Union.png'
import styles from './SignIn.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from '../configs/api'
import { useRegister } from '../services/mutations'

function SignIn() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  
  
  // const registerHandeler=()=>{
  //     axios.post("http://localhost:3000/auth/register",{username ,password})
  //     .then((res)=>console.log(res))
  //     setUsername("")
  //     setPassword("")
  //     setConfirmPassword("")
  // }

  const {mutate}=useRegister()

  const registerHandeler=(event)=>{
    event.preventDefault();
    // if(!username||!password)return alert("Username and Password is Necessary!!!")
    // if(password!==confirmPassword)return alert("Password Does Not Match!!!")


    mutate({username,password},{onSuccess:(data)=>{
      console.log(data)
    },onError:error=>console.log(error.response.data.message)
  
  })
    // api.get("products")
    setUsername("")
    setPassword("")
    setConfirmPassword("")
}
  return (
    <>
    <h1 className={styles.title}>بوت کمپ بوتواستارت</h1>
     <div className={styles.container}>
      <form onSubmit={registerHandeler} className={styles.form}>
        <img src={Union} alt="logo picture"  className={styles.logo}/>
        <h1 className={styles.titleForm}>فرم ثبت نام</h1>
        <input type="text" name="" id="1" className={styles.inputs} value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='نام کاربری' /><br />
        <input type="password" name="" id="2" className={styles.inputs} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='رمز عبور'/><br />
        <input type="password" name="" id="3" className={styles.inputs} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='تکرار رمز عبور'/><br />

        <Link to=''>
        <button onClick={registerHandeler} className={styles.btn} type="submit">ثبت نام</button>
        </Link>

        <br />
        <Link to='./Login' className={styles.link}>
        حساب کاربری دارید؟
        </Link>
      </form>
     </div>
    
    </>

  )
}

export default SignIn