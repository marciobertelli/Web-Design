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


//---------------- CLASSES -----------------//
// Definição de Classes e Herança

// Exemplos:
class Animal {
 nome: string;
 constructor(nome: string) {
 this.nome = nome;
 }
 falar(): void {
 console.log(`${this.nome} faz um barulho.`);
 }
}
class Cachorro extends Animal {
 latir(): void {
 console.log(`${this.nome} late.`);
 }
}
let cachorro = new Cachorro("Buddy");
cachorro.falar();
cachorro.latir();

//---------------- NULL E UNDEFINED -----------------//

// ------ UNDEFINED
let valorIndefinido: string | undefined;
console.log(valorIndefinido); // undefined
function buscarPropriedade(obj: { [key: string]: any }, chave: string) {
 return obj[chave];
}

const obj = { nome: "João" };
console.log(buscarPropriedade(obj, "idade")); // undefined

// ------ NULL
let valorNulo: string | null = null;
console.log(valorNulo); // null
let objeto: { nome: string | null } = { nome: null };
console.log(objeto.nome); // null

// COMPARAÇÃO
let x: undefined = undefined;
let y: null = null;
console.log(x == y); // true (comparação de igualdade frouxa)
console.log(x === y); // false (comparação de igualdade estrita)


// ------ STRICTNULLCHECK

