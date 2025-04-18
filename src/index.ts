import { filaHospital } from "./filaHospital";

const fila1 = new filaHospital();

fila1.adicionar_paciente('Richard', 'amarelo');
fila1.adicionar_paciente('Ronaldo', 'amarelo')
fila1.adicionar_paciente('Mario','amarelo')
fila1.adicionar_paciente('Enzo', 'verde');
fila1.adicionar_paciente('Victor', 'vermelho');
fila1.adicionar_paciente('Dario', 'azul');

fila1.printar_filas()