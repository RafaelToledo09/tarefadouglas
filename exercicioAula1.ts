type Consumidor = {
    id: number | null,
    nome: string | null,
    idade: number | null,
    sexo: string | null
}



const criarObjeto = (): Consumidor => {
    const consumidor: Consumidor = {
        id: null,
        nome: null,
        idade: null,
        sexo: null
    }

    return consumidor;
}

const preencherObjeto = (consumidor: Consumidor): Consumidor => {
    consumidor.id = Number(prompt("Digite o id: "));
    consumidor.nome = prompt("Digite o nome: ")
    consumidor.idade = Number(prompt("Digite a idade: "))
    consumidor.sexo = prompt("Digite o sexo: ")
    return consumidor
}

const verificarMaiorIdade = ()=>{

}

const verificarMenorIdade = ()=>{

}

const calcularMediaDeIdade = ()=>{

}

const apresentarResultador = ()=>{

}