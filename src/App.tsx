import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import AboutUs from "./components/Pages/AboutUs"
import Footer from "./components/Footer"
import Contact from "./components/Pages/Contact"

function App() {

  return (
    <>
        <Header/>
        <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
        <Footer/>
    </>
  )
}

export default App
