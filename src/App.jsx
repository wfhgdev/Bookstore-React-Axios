import Navbar from "./components/NavBar/Navbar"
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
          <Route path="/books" element={<Books />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </main>
    </>
  )
}

export default App;