import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Cadastro from './Pages/cadastro'
import Detalhes from './Pages/detalhes'
import Home from './Pages/home'
import Produtos from './Pages/produtos'

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<Detalhes />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}