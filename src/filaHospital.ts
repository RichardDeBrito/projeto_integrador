import { Paciente } from "./Paciente";
import { Prioridade } from "./Paciente";

export class filaHospital {
    fila_laranja: Paciente[] = [];
    fila_amarelo: Paciente[] = [];
    fila_verde: Paciente[] = [];
    fila_azul: Paciente[] = [];

    fila_geral: Paciente[] = [];
    matriz = [this.fila_geral, this.fila_laranja, this.fila_amarelo, this.fila_verde, this.fila_azul];

    tempos_maximos: Record<Prioridade, number> = {
        vermelho: 0,
        laranja: 10,
        amarelo: 60,
        verde: 120,
        azul: 240
    };

    adicionar_paciente(nome:string, prioridade: Prioridade): void {
        const paciente: Paciente = {
            nome,
            prioridade,
            chegada: new Date()
        };
      
        switch (prioridade) {
            
            case 'vermelho':
                this.fila_geral.push(paciente);
                break;

            case 'laranja':
                this.fila_laranja.push(paciente);
                break;

            case 'amarelo':
                this.fila_amarelo.push(paciente);
                break;

            case 'verde':
                this.fila_verde.push(paciente);
                break;
            
            case 'azul':
                this.fila_azul.push(paciente);
                break;
        }
    }

    printar_filas() :void {
        for(let i = 0; i < this.matriz.length; i++) {
            for (let c = 0; c < this.matriz[i].length; c++) {
                if (this.matriz[i].length == 0) {
                    console.log("Lista vazia.")
                } else {
                console.log(this.matriz[i][c]);
                }
            }
        }
    }
}