import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/Home"
import About from "./components/About"
import Acomodation from "./components/Acomodation"
import Services from "./components/Services"
import Reviews from "./components/Memorable"
function App() {
  return (
      <BrowserRouter>
         <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/accomodation" element={<Acomodation/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/reviews" element={<Reviews/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
