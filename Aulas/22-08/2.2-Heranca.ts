// Definição de classe base (superclasse)
class Pessoa {
    constructor(public nome: string, public idade: number) {}

    saudacao(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Definição de subclasse (herança)
class Estudante extends Pessoa {
    constructor(nome: string, idade: number, public curso: string) {
        super(nome, idade); // Chama o construtor da superclasse *
    }

    // Método adicional na subclasse
    apresentacao(): string {
        return `${super.saudacao()} Estudo ${this.curso}.`;
    }
}

// Instanciando e utilizando a subclasse
const estudante = new Estudante('Maria', 25, 'Análise e Desenvolvimento de Sistemas');
console.log(estudante.apresentacao()); 
// Saída: Olá, meu nome é Maria e tenho 25 anos. Estudo Análise e Desenvolvimento de Sistemas.
