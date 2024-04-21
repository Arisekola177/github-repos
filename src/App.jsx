import Create from "../pages/Create"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import RepoDetails from "../pages/RepoDetails"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/repos/:name" element={<RepoDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
