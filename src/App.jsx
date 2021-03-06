import {Route,Routes} from "react-router-dom"
import './App.css'
import Navbar from "./Components/Navbar"
import Home from "./Routes/Home"
import Register from "./Routes/Register"
import Login from "./Routes/Login"
import PageNotFound from "./Routes/PageNotFound"
import Footer from "./Components/Footer"
import ProductView from "./Routes/ProductView"
import CartShopp from "./Routes/CartShopp"



function App() {
  
  return(
  <>
 
    <Navbar  />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:name" element={<ProductView />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/cart" element={<CartShopp />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    <Footer />


  </>
  )
}

export default App
