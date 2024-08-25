//----------------TIPOS BÁSICOS -----------------//
// String, Number, Boolean, Array, Tuple, Enum, Any, Void, Null e Undefined
// Exemplos:
var nome = "João";
var idade = 30;
var ativo = true;
var numeros = [1, 2, 3];
var tupla = ["Alice", 25];
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var cor = Cor.Verde;
//---------------- FUNÇÕES -----------------//
// Definição de Tipos de Parâmetros e Retornos
// Exemplos:
function cumprimentar(nome) {
    return "Ol\u00E1, ".concat(nome);
}
function somar(a, b) {
    return a + b;
}
var pessoa = {
    nome: "Ana",
    idade: 28
};
var idUsuario = "123";
