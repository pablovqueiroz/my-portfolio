import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import "../src/styles/global.css"
import Footer from "./components/Footer/Footer"
import ProjectsPage from "./pages/Projects/ProjectsPage"
import Contact from "./pages/Contact/Contact"
import InProgress from "./pages/InProgress/InProgress"

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="in-progress" element={<InProgress/>}/>
        <Route path="contact-me" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
