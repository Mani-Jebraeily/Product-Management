import Login from "./pages/Login"
import SignIn from "./pages/SignIn"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="Login" element={<Login/>}/>
       

      </Routes>


    </BrowserRouter>
 
    </>
  )
}

export default App
