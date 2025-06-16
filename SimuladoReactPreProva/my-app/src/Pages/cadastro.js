import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { salvarProduto } from '../Utils/storage'
import './Cadastro.css'

function Cadastro() {
  const opcoesProdutos = [
  'Roupa',
  'Eletrodoméstico',
  'Eletrônicos',
  'Cozinha',
  'Ferramentas',
  'Material Escolar'
  ]
  const [produto, setProduto] = useState('')
  const [marca, setMarca] = useState('')
  const [tipo, setTipo] = useState('')
  const [tamanho, setTamanho] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [descricao, setDescricao] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nome || !preco) return alert('Nome e preço são obrigatórios!')
    salvarProduto({ nome, preco, descricao, marca, tipo, tamanho, quantidade })
    alert('Produto cadastrado com sucesso!')
    navigate('/produtos')
  }

  return (
    <section className='register-content'>
      <h2>Cadastro de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <select value={produto} onChange={e => setProduto(e.target.value)}>
        <option value="">Selecione um produto</option>
        {opcoesProdutos.map((p, i) => (
        <option key={i} value={p}>{p}</option>
        ))}
        </select>
        <input placeholder="Produto" value={produto} onChange={e => setTipo(e.target.value)} disabled />
        <input placeholder="Tipo" value={tipo} onChange={e => setTipo(e.target.value)} />
        <input placeholder="Marca" value={marca} onChange={e => setMarca(e.target.value)} />
        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input placeholder="Quantidade" type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
        <input placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />
        <input placeholder="Tamanho" value={tamanho} onChange={e => setTamanho(e.target.value)}/>
        <textarea placeholder="Descrição (opcional)" value={descricao} onChange={e => setDescricao(e.target.value)} />
        <button type="submit">Salvar</button>
      </form>
    </section>
  )
}
export default Cadastro