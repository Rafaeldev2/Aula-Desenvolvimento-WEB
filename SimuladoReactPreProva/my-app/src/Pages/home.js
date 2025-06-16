import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <section className='home-content'>
      <h2>Bem-vindo à MiniStore!</h2>
      <p>Explore nosso catálogo e cadastre novos produtos.</p>
      <Link to="/produtos">Ver Produtos</Link> |{" "}
      <Link to="/cadastro">Cadastrar Produto</Link>
    </section>
  )
}
export default Home