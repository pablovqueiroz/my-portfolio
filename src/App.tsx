import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import "../src/styles/global.css"
import Footer from "./components/Footer/Footer"
import ProjectsPage from "./pages/Projects/ProjectsPage"
import Contact from "./pages/Contact/Contact"

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="contact-me" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
