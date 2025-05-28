import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Estadisticas from "./components/Estadisticas"
import PersonaCard from "./components/PersonaCard"
import FormularioContacto from "./components/FormularioContacto"
function App() {
  return (
    <>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="persona/:id" element={<PersonaCard />} />
      <Route path="estadisticas" element={<Estadisticas />} />
      <Route path="contacto" element={<FormularioContacto />} />
      <Route path="*" element={<h1>404</h1>} />
    </Route>
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App
