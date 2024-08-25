// Definição de interseção
type Jogador = {
    nome: string;
    idade: number;
    habilidades: string[];
};

type Gamer = {
    id: number;
    jogos: string[];
};

type JogadorGamer = Jogador & Gamer;

// Exemplo de utilização
const jogadorGamer: JogadorGamer = {
    nome: 'Maria',
    idade: 30,
    habilidades: ['futebol', 'tênis'],
    id: 123,
    jogos: ['FIFA', 'Mario Kart']
};