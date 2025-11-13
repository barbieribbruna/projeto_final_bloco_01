import { Produto } from "../model/Produto"
import { IProdutoRepository } from "../repository/IProdutoRepository"

export class ProdutoController implements IProdutoRepository {

    // COLLECTION que armazena os produtos em memória
    private listaProdutos: Produto[] = []

    // controle de ID automático
    private proximoId: number = 1

    // CREATE
    public cadastrar(produto: Produto): void {
        produto.id = this.proximoId++
        this.listaProdutos.push(produto)
        console.log("\n✅ Produto cadastrado com sucesso!")
    }

    // READ - listar todos
    public listarTodos(): Produto[] {
        if (this.listaProdutos.length === 0) {
            console.log("\n⚠ Nenhum produto cadastrado.")
        }

        this.listaProdutos.forEach(p => p.visualizar())
        return this.listaProdutos
    }

    // READ - buscar por id
    public buscarPorId(id: number): Produto | null {
        const produto = this.listaProdutos.find(p => p.id === id)

        if (!produto) {
            console.log(`\n⚠ Produto com id ${id} não encontrado.`)
            return null
        }

        produto.visualizar()
        return produto
    }

    // UPDATE
    public atualizar(produto: Produto): void {
        const index = this.listaProdutos.findIndex(p => p.id === produto.id)

        if (index === -1) {
            console.log(`\n⚠ Produto com id ${produto.id} não encontrado.`)
            return
        }

        this.listaProdutos[index] = produto
        console.log("\n✅ Produto atualizado com sucesso!")
    }

    // DELETE
    public deletar(id: number): void {
        const index = this.listaProdutos.findIndex(p => p.id === id)

        if (index === -1) {
            console.log(`\n⚠ Produto com id ${id} não encontrado.`)
            return
        }

        this.listaProdutos.splice(index, 1)
        console.log("\n🗑 Produto deletado com sucesso!")
    }
}
