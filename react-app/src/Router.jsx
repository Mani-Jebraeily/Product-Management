import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import ProductsList from './pages/ProductsList'


function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Products" element={<ProductsList/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Router



