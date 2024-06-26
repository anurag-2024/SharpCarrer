import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/Home"
import About from "./components/About"
import Acomodation from "./components/Acomodation"
import Services from "./components/Services"
import Reviews from "./components/Memorable"
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Explore from "./pages/Explore"
function App() {
  return (
      <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/accomodation" element={<Acomodation/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/explore" element={<Explore/>} />
        </Routes>
       
      </BrowserRouter>
  )
}

export default App
