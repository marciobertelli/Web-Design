// Definição de interface
interface Pessoa {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
    readonly cpf: string; // Propriedade somente leitura
}

// Exemplo de utilização
const pessoa: Pessoa = {
    nome: 'João',
    idade: 25,
    cpf: '123.456.789-00'
};

// Tentativa de alterar o CPF gerará um erro pois é somente leitura
// pessoa.cpf = '987.654.321-00'; // Erro: não pode alterar uma propriedade readonly

