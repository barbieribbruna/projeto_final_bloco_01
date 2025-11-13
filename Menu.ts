import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors"
import { ProdutoController } from "./src/controller/ProdutoController"
import { AcessorioViagem } from "./src/model/AcessorioViagem"

const produtoController = new ProdutoController()

export function main() {

    let opcao: number

    do { // o bloco é executado pelo menos uma vez
        console.log(colors.fg.red,
            "\n===========================================")
        console.log("          🐾 PETTRIP - MENU 🐾            ")
        console.log("===========================================")
        console.log("             1 - Cadastrar produto        ")
        console.log("             2 - Listar produto(s)")
        console.log("             3 - Buscar produto por ID")
        console.log("             4 - Atualizar produto")
        console.log("             5 - Deletar produto")
        console.log("             6 - Sobre o sistema")
        console.log("             0 - Sair")
        console.log("===========================================",
            colors.reset)

        console.log("\nDigite a opção desejada: ")
        opcao = readlinesync.questionInt("")

        // LAÇOS CONDICIONAIS
        switch (opcao) {

            case 1:
                cadastrarProduto()
                break
            case 2:
                produtoController.listarTodos()
                break
            case 3:
                buscarProdutoPorId()
                break
            case 4:
                atualizarProduto()
                break
            case 5:
                deletarProduto()
                break
            case 6:
                sobre()
                break
            case 0:
                console.log("\nEncerrando o sistema... Até logo! 🐾")
                break
            default:
                console.log("\nOpção inválida. Tente novamente.")
                break
        }

        // LAÇO DE REPETIÇÃO
    } while (opcao !== 0) // a condição somente é verificada aqui, depois da execução | enquanto 'opcao' for !== de 5, o menu faz o loop
}

/* ===================== FUNÇÕES DO CRUD ===================== */

function cadastrarProduto(): void {
    console.clear()
    console.log("\n=== Cadastro de Produto ===")

    const nome = readlinesync.question("Nome: ")
    const descricao = readlinesync.question("Descrição: ")
    const preco = Number(readlinesync.question("Preço: "))
    const estoque = Number(readlinesync.question("Estoque: "))
    const portePet = readlinesync.question("Porte do pet (pequeno/médio/grande): ")
    const material = readlinesync.question("Material: ")

    const produto = new AcessorioViagem(
        0,          // id: será definido automaticamente pelo controller
        nome,
        descricao,
        preco,
        estoque,
        portePet,
        material
    )

    produtoController.cadastrar(produto)
    pausar()
}

function buscarProdutoPorId(): void {
    console.clear()
    console.log("\n=== Buscar produto por ID ===")
    const id = Number(readlinesync.question("Digite o ID do produto: "))
    produtoController.buscarPorId(id)
}

function atualizarProduto(): void {
    console.clear()
    console.log("\n=== Atualizar Produto ===")
    const id = Number(readlinesync.question("Digite o ID do produto: "))

    const produtoExistente = produtoController.buscarPorId(id)

    if (!produtoExistente) {
        console.log("\nNão foi possível atualizar. Produto não encontrado.")
        return
    }

    console.log("\nInforme os novos dados (deixe em branco para manter):")

    const nome = readlinesync.question(`Nome (${produtoExistente.nome}): `) || produtoExistente.nome
    const descricao = readlinesync.question(`Descrição (${produtoExistente.descricao}): `) || produtoExistente.descricao

    const precoStr = readlinesync.question(`Preço (${produtoExistente.preco}): `)
    const preco = precoStr === "" ? produtoExistente.preco : Number(precoStr)

    const estoqueStr = readlinesync.question(`Estoque (${produtoExistente.estoque}): `)
    const estoque = estoqueStr === "" ? produtoExistente.estoque : Number(estoqueStr)

   const acessorio = produtoExistente as AcessorioViagem

    const portePet = readlinesync.question(`Porte do pet (${acessorio.portePet}): `) || acessorio.portePet
    const material = readlinesync.question(`Material (${acessorio.material}): `) || acessorio.material

    const atualizado = new AcessorioViagem(
        id,
        nome,
        descricao,
        preco,
        estoque,
        portePet,
        material
    )

    produtoController.atualizar(atualizado)
}

function deletarProduto(): void {
    console.clear()
    console.log("\n=== Deletar produto ===")
    const id = Number(readlinesync.question("Digite o ID do produto a excluir: "))

    produtoController.deletar(id)
}

/* ============ Funções auxiliares (sobre e pausa) ============ */

function pausar(): void {
    readlinesync.question("\nPressione ENTER para continuar...")
}

export function sobre(): void {
    console.clear()
    console.log("\n***********************************************************")
    console.log("Sistema desenvolvido para o projeto final - Bloco 01")
    console.log("Tema: PetTrip - E-commerce de produtos para pets viajantes")
    console.log("Desenvolvido por: Bruna Barbieri")
    console.log("***********************************************************")
    pausar()
}

main()

