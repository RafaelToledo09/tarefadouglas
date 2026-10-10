import type { Endereco } from "./Endereco.js";

export class Cliente {

    constructor(
        private id:number, 
        private nome:string,
        private idade: number, 
        private endereco:Endereco
    ) {}

    protected validarIdade = (): string =>{
        return this.idade >= 18 ? "Maior que 18": "Menor que 18";
    }

    public apresentar = ():string =>{
        return `Cliente ${this.nome} com ID ${this.id} e ele(a) é ${this.validarIdade()}`;
    }

    public editar = (nome: string): void =>{
        this.nome = nome;
    }    
}