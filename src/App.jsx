import {BrowserRouter, Route, Routes} from "react-router-dom"


import AuthenticatedLayout from "./UI/AuthenticatedLayout"

import Start from "./pages/Start"
import Signup from "./pages/Signup"
import VerifyAfterSignup from "./pages/VerifyAfterSignup"
import Login from "./pages/Login"
import ForgetPassword from "./pages/ForgetPassword"
import VerifyResetPassword from "./pages/VerifyResetPassword"
import NewPassword from "./pages/NewPassword"
import Home from "./pages/Home"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Start/>} />
        <Route  path="/signup" element={<Signup />} />
        <Route  path="/signup/verify" element={<VerifyAfterSignup/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/forget-password" element={<ForgetPassword/>}  />
        <Route  path="/forget-password/verify" element={<VerifyResetPassword/>}  />
        <Route  path="/forget-password/newPassword" element={<NewPassword/>} />
        <Route  element={<AuthenticatedLayout/>} >
          <Route path="/Home"  element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:productId" element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App