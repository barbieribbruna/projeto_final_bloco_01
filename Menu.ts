import readlinesync = require("readline-sync")

export function main() {

    let opcao: number

    do { // o bloco é executado pelo menos uma vez
        console.log("\n===========================================")
        console.log("       🐾 PETTRIP - Menu Principal 🐾     ")
        console.log("===========================================")
        console.log("           1 - Cadastrar produto           ")
        console.log("           2 - Listar produto(s)           ")
        console.log("           3 - Comprar produto(s)          ")
        console.log("           4 - Sobre a loja PetTrip        ")
        console.log("           5 - Sair                        ")
        console.log("===========================================")

        console.log("\nDigite a opção desejada: ")
        opcao = readlinesync.questionInt("")

        if (opcao == 5) {
            console.log("\nPetTrip - A aventura do seu pet começa aqui! 🐾")
            sobre()
            process.exit(0)
        }

        // LAÇOS CONDICIONAIS
        switch (opcao) {
            case 1:
                console.log("\n>>> Opção escolhida: Cadastrar produto <<<")
                break

            case 2:
                console.log("\n>>> Opção escolhida: Listar produto(s) <<<")
                break

            case 3:
                console.log("\n>>> Opção escolhida: Comprar produto(s) <<<")
                break

            case 4:
                console.log("\n>>> Opção escolhida: Sobre a loja PetTrip <<<")
                break

            default:
                console.log("\nOpção inválida. Tente novamente.")
                break
        }

        // LAÇO DE REPETIÇÃO
    } while (opcao !== 5) // a condição somente é verificada aqui, depois da execução | enquanto 'opcao' for !== de 5, o menu faz o loop
}


/* Função com os dados da pessoa desenvolvedora / sistema */

export function sobre(): void {
    console.log("\n***********************************************************")
    console.log("Sistema desenvolvido para o projeto final - Bloco 01")
    console.log("Tema: PetTrip - E-commerce de produtos para pets viajantes")
    console.log("Desenvolvido por Bruna Barbieri")
    console.log("***********************************************************")

}

main()