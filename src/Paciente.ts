export type Prioridade = 'vermelho' | 'laranja' | 'amarelo' | 'verde' | 'azul';

export interface Paciente {
    nome: string;
    prioridade: Prioridade;
    chegada: Date;
}