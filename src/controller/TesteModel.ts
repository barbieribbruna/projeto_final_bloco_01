import { AcessorioViagem } from "../model_repository/AcessorioViagem"


export function main (): void {

// criando 1 produto PetTrip para teste

    const mochila = new AcessorioViagem (

        1,
        "Mochila de viagem PetTrip",
        "Mochila para transporte seguro de pets em viagens",
        199.90,
        10,
        "médio",
        "poliéster"

    )

    console.log("\nPRODUTO CADASTRADO (TESTE INICIAL)")

    mochila.visualizar()  // testa construtor + método sobrescrito

    // testando getters e setters (atualizar dados)
    mochila.preco = 179.90
    mochila.estoque = 5

    console.log("\nPRODUTO APÓS ALTERAÇÃO (USANDO SETTERS)")
    console.log(`Novo preço: R$ ${mochila.preco.toFixed(2)}`)
    console.log(`Novo estoque: ${mochila.estoque} unidade(s)`)

    console.log("\nVISUALIZAR COMPLETO APÓS ALTERAÇÃO")
    mochila.visualizar()

}

main()