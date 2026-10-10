class Consumidor {
  public readonly nome: string;
  public readonly idade: number;
  public readonly email: string;

  constructor(nome: string, idade: number, email: string) {
    this.nome = nome.trim();
    this.idade = idade;
    this.email = email.trim();

    this.validarNome();
    this.validarIdade();
    this.validarEmail();
  }

  private validarNome(): void {
    if (this.nome.length < 2) {
      throw new Error("O nome deve ter pelo menos 2 caracteres.");
    }
  }

  private validarIdade(): void {
    if (!Number.isInteger(this.idade) || this.idade < 0 || this.idade > 130) {
      throw new Error("A idade deve ser um número inteiro entre 0 e 130.");
    }
  }

  private validarEmail(): void {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(this.email)) {
      throw new Error("Informe um endereço de e-mail válido.");
    }
  }

  public formatarExibicao(): string {
    return `Consumidor: ${this.nome} (${this.idade} anos) - ${this.email}`;
  }

  public static calcularMediaIdade(consumidores: readonly Consumidor[]): number {
    if (consumidores.length === 0) return 0;

    const somaIdades = consumidores.reduce((soma, consumidor) => soma + consumidor.idade, 0);
    return somaIdades / consumidores.length;
  }

  public static obterExtremosIdade(consumidores: readonly Consumidor[]): {
    maisVelho: Consumidor | undefined;
    maisNovo: Consumidor | undefined;
  } {
    let maisVelho = consumidores[0];
    let maisNovo = consumidores[0];

    for (const consumidor of consumidores) {
      if (maisVelho === undefined || consumidor.idade > maisVelho.idade) {
        maisVelho = consumidor;
      }
      if (maisNovo === undefined || consumidor.idade < maisNovo.idade) {
        maisNovo = consumidor;
      }
    }

    return { maisVelho, maisNovo };
  }
}

const listaConsumidores: Consumidor[] = [
  new Consumidor("Ana Silva", 30, "ana@email.com"),
  new Consumidor("Carlos Souza", 22, "carlos@email.com"),
  new Consumidor("Mariana Lima", 45, "mariana@email.com"),
  new Consumidor("Roberto Alves", 19, "roberto@email.com"),
  new Consumidor("Fernanda Dias", 33, "fernanda@email.com"),
];

console.log("=== LISTA DE CONSUMIDORES ===");
listaConsumidores.forEach((consumidor) => console.log(consumidor.formatarExibicao()));

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
console.log(
  `Média das Idades: ${Consumidor.calcularMediaIdade(listaConsumidores).toFixed(1)} anos`,
);

const { maisVelho, maisNovo } = Consumidor.obterExtremosIdade(listaConsumidores);
if (maisVelho !== undefined && maisNovo !== undefined) {
  console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
  console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
} else {
  console.log("Não foi possível calcular os extremos de idade");
}
