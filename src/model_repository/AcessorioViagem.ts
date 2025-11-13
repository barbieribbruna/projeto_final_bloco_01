import { Produto } from "./Produto"

export class AcessorioViagem extends Produto {

    // ATRIBUTOS ESPECÍFICOS DO PRODUTO
    
    private _portePet: string     // ex.: pequeno, médio, grande
    private _material: string     // ex.: nylon, poliéster, etc

    // MÉTODO CONSTRUTOR

    constructor (
        id: number,
        nome: string,
        descricao: string,
        preco: number,
        estoque: number,
        portePet: string,
        material: string

    ) {

        super(id, nome, descricao, preco, estoque)
        this._portePet = portePet
        this._material = material
    }

    // MÉTODOS DE ACESSO GET E SET DOS ATRIBUTOS ESPECÍFICOS

    public get portePet(): string {
        return this._portePet
    }
    public set portePet(portePet: string) {
        this._portePet = portePet
    }

    public get material(): string {
        return this._material
    }
    public set material(material: string) {
        this._material = material
    }

    // POLIMORFISMO (SOBRESCRITA DO MÉTODO VISUALIZAR())

    public override visualizar(): void {
        super.visualizar()
        console.log(`Porte indicado do pet: ${this._portePet}`)
        console.log(`Material do acessório: ${this._material}`)
        console.log("*****************************************************\n")
    }
}