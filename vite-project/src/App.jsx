import React from "react"
import{Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import About from "./components/aboutme"
import Experience from "./components/Experience"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Projects from "./components/projects"


 const App = () => {
  return (
  <div>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
           <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
     </Routes>
     
</div>
    )
}
export default App
