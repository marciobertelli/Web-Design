// Definição de classe simples
class Pessoa {
    // O construtor inicializa as propriedades da classe
    constructor(public nome: string, public idade: number) {}

    // Método que retorna uma saudação
    saudacao(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Instanciando um objeto da classe Pessoa
const pessoa = new Pessoa('João', 30);
console.log(pessoa.saudacao()); // Saída: Olá, meu nome é João e tenho 30 anos.