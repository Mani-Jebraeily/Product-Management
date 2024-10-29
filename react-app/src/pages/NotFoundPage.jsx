import React from 'react'
import { Link } from 'react-router-dom' 
import styles from './NotFoundPage.module.css'
import SignIn from './SignIn'


function NotFoundPage() {
  return (
    <>
    <h1 >404</h1>
    <p>Not Found Page</p>
    <Link to="/" className={styles.Link}> Back To Root</Link>
    </>
  )
}

export default NotFoundPage