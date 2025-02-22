import './css/App.css'
import Home from "./pages/Home"
import Navbar from "./component/Navbar"
import Favorites from "./pages/Favorites"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
