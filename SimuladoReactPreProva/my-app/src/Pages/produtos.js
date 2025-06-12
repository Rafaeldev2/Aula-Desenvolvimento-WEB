import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { buscarProdutos } from '../Utils/storage'
import './Produtos.css'

function Produtos() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const lista = buscarProdutos()
    setProdutos(lista)
  }, [])

  return (
    <section className='products-content'>
      <h2>Produtos Cadastrados</h2>
      <p>Total de produtos: {produtos.length}</p>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        produtos.map((p, i) => (
          <div key={i} className="product-list">
            {p.nome} - R$ {p.preco} <Link to={`/produtos/${i}`}>Ver detalhes</Link>
          </div>
        ))
      )}
    </section>
  )
}
export default Produtos