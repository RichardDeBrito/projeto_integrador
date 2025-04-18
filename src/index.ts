import { filaHospital } from "./filaHospital";
import { Paciente } from "./Paciente";
import { Prioridade } from "./Paciente";

const fila1 = new filaHospital();

fila1.adicionar_paciente('Richard', 'amarelo');
fila1.adicionar_paciente('Enzo', 'verde');
fila1.adicionar_paciente('Victor', 'vermelho');
fila1.adicionar_paciente('Dario', 'azul');

fila1.printar_filas()