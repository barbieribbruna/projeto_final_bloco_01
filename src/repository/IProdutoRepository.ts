import { Produto } from "../model/Produto"

export interface IProdutoRepository {

    // CRUD DO PRODUTO

    cadastrar(produto: Produto): void
    listarTodos(): Produto[]
    buscarPorId(id: number): Produto | null
    atualizar(produto: Produto): void
    deletar(id: number): void
       
}
