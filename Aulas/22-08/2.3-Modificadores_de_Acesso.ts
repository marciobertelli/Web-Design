class Funcionario extends Pessoa {
    private salario: number; // Propriedade privada, não acessível fora da classe

    constructor(nome: string, idade: number, salario: number) {
        super(nome, idade);
        this.salario = salario;
    }

    // Método público para acessar a propriedade privada
    getSalario(): number {
        return this.salario;
    }
}

const funcionario = new Funcionario('Carlos', 40, 5000);
console.log(funcionario.getSalario()); // Saída: 5000
// console.log(funcionario.salario); // Erro: 'salario' é privado e não pode ser acessado diretamente