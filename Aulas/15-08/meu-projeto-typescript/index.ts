//----------------TIPOS BÁSICOS -----------------//

// String, Number, Boolean, Array, Tuple, Enum, Any, Void, Null e Undefined

// Exemplos:
let nome: string = "João";
let idade: number = 30;
let ativo: boolean = true;
let numeros: number[] = [1, 2, 3];
let tupla: [string, number] = ["Alice", 25];
enum Cor {
 Vermelho,
 Verde,
 Azul
}
let cor: Cor = Cor.Verde;


//---------------- FUNÇÕES -----------------//

// Definição de Tipos de Parâmetros e Retornos
// Exemplos:

function cumprimentar(nome: string): string {
 return `Olá, ${nome}`;
}
function somar(a: number, b: number): number {
 return a + b;
}

//---------------- INTERFACES E TIPOS -----------------//


// Definindo Estruturas e Tipos Personalizados
// Exemplos:
interface Pessoa {
 nome: string;
 idade: number;
}
let pessoa: Pessoa = {
 nome: "Ana",
 idade: 28
};
type ID = string | number;
let idUsuario: ID = "123";