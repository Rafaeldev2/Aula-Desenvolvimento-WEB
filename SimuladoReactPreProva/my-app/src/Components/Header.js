import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="bg-primary text-white text-center p-3">
      <Link to="/" className='linkMiniStore'><h1>MiniStore</h1></Link>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/Produtos">Produtos</Link> |{" "}
        <Link to="/Cadastro">Cadastrar</Link>
      </nav>
    </header>
  )
}
export default Header