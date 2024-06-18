import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/Home"


function App() {
  return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home/>} />
         
        </Routes>
      
      </BrowserRouter>
  )
}

export default App
