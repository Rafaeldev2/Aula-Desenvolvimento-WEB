import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { salvarProduto } from '../Utils/storage'
import './Cadastro.css'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [descricao, setDescricao] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nome || !preco) return alert('Nome e preço são obrigatórios!')
    
    salvarProduto({ nome, preco, descricao })
    alert('Produto cadastrado com sucesso!')
    navigate('/produtos')
  }

  return (
    <section>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />
        <textarea placeholder="Descrição (opcional)" value={descricao} onChange={e => setDescricao(e.target.value)} />
        <button type="submit">Salvar</button>
      </form>
    </section>
  )
}
export default Cadastro