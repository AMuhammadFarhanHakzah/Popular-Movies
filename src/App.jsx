import './css/App.css'
import Home from "./pages/Home"
import Navbar from "./component/Navbar"
import Favorites from "./pages/Favorites"
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from './context/MovieContext'

function App() {

  return (
    <MovieProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </MovieProvider>
  )
}

export default App
