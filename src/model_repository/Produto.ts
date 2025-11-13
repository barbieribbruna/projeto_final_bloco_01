import { colors } from "../util/Colors"

export abstract class Produto {

    // ATRIBUTOS

    private _id: number
    private _nome: string
    private _descricao: string
    private _preco: number
    private _estoque: number

    // MÉTODO CONSTRUTOR
    
    constructor(

        id: number, 
        nome: string, 
        descricao: string, 
        preco: number, 
        estoque: number

    ) {

        this._id = id
        this._nome = nome
        this._descricao = descricao
        this._preco = preco
        this._estoque = estoque
    }

    // MÉTODOS DE ACESSO GET E SET
    
    public get id(): number { // método para obter/acessar/ler o valor da propriedade privada '_id'
        return this._id
    }
    public set id(id: number) { // método usado para alterar o valor da propriedade privada '_id'
        this._id = id
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(nome: string) {
        this._nome = nome
    }

    public get descricao(): string {
        return this._descricao
    }
    public set descricao(descricao: string) {
        this._descricao = descricao
    }

    public get preco(): number {
        return this._preco
    }
    public set preco(preco: number) {
        this._preco = preco
    }

    public get estoque(): number {
        return this._estoque
    }
    public set estoque(estoque: number) {
        this._estoque = estoque
    }

    public visualizar(): void {
        console.log(colors.fg.red,"\n*****************************************************")
        console.log("          🐾 PETTRIP - Menu Principal 🐾            ")
        console.log("*****************************************************", colors.reset)
        console.log(`Id do produto: ${this._id}`)
        console.log(`Nome do produto: ${this._nome}`)
        console.log(`Descrição do produto: ${this._descricao}`)
        console.log(`Preço do produto: R$ ${this._preco.toFixed(2)}`)
        console.log(`Estoque do produto: ${this._estoque} unidade(s)`)
    }
}