import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Books from "./pages/books/Books"
import Location from "./pages/location/Location"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
        </Routes>
      </main>
    </>
  )
}

export default App