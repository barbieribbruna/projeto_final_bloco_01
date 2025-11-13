import { Produto } from "./Produto"

export interface IProdutoRepository {

    // CADASTRAR PRODUTO

    cadastrar(produto: Produto): void

    // LISTAR TODOS OS PRODUTOS

    listarTodos(): Produto[]

    // BUSCAR PRODUTO POR ID

    buscarPorId(id: number): Produto | null

    // ATUALIZAR PRODUTO

    atualizar(produto: Produto): void

    // DELETAR PRODUTO
    
    deletar(id: number): void
}
