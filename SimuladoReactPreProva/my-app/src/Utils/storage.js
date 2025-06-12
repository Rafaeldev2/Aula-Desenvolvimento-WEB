const CHAVE = 'ministore_produtos'

export function buscarProdutos() {
  return JSON.parse(localStorage.getItem(CHAVE)) || []
}

export function salvarProduto(produto) {
  const lista = buscarProdutos()
  lista.push(produto)
  localStorage.setItem(CHAVE, JSON.stringify(lista))
}