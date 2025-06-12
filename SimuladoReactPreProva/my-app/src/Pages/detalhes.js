import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { buscarProdutos } from '../Utils/storage'
import './Detalhes.css'

function Detalhes() {
  const { id } = useParams()
  const navigate = useNavigate()
  const produto = buscarProdutos()[id]

  useEffect(() => {
    console.log('Produto carregado!')
    return () => {
      console.log('Saindo da página de detalhes.')
    }
  }, [])

  if (!produto) return <p>Produto não encontrado.</p>

  return (
    <section className='product-details'>
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco}</p>
      <p>Descrição: {produto.descricao || 'Sem descrição.'}</p>
      <button onClick={() => navigate('/produtos')}>Voltar</button>
    </section>
  )
}
export default Detalhes