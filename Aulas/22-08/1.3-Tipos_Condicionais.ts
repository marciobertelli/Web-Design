// Definição de tipos condicionais
type Cores = 'vermelho' | 'azul';
type Tamanho = 1 | 2 | 3;
type DescricaoCor<T> = T extends 'vermelho' ? 'Cor Quente' : 'Cor Fria';

// Exemplo de utilização
const cor: Cores = 'vermelho';
const tamanho: Tamanho = 2;

const descricaoCorVermelho: DescricaoCor<'vermelho'> = 'Cor Quente'; // Inferido como 'Cor Quente'