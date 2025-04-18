import { Paciente } from "./Paciente";
import { Prioridade } from "./Paciente";

export class filaHospital {
    fila_laranja: Paciente[] = [];
    fila_amarelo: Paciente[] = [];
    fila_verde: Paciente[] = [];
    fila_azul: Paciente[] = [];

    fila_geral: Paciente[] = [];

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
        console.log('Fila geral: ');
        if (this.fila_geral.length == 0) {
            console.log('Fila vazia.');
            console.log();
        } else {
            console.log(this.fila_geral);
            console.log();
        }

        console.log('Fila laranja: ');
        if (this.fila_laranja.length == 0) {
            console.log('Fila vazia.');
            console.log();
        } else {
        console.log(this.fila_laranja);
        console.log();
        }

        console.log('Fila amarelo: ');
        if (this.fila_amarelo.length == 0) {
            console.log('Fila vazia.');
            console.log();
        } else {
        console.log(this.fila_amarelo);
        console.log();
        }

        console.log('Fila verde: ');
        if (this.fila_verde.length == 0) {
            console.log('Fila vazia.');
            console.log();
        } else {
        console.log(this.fila_verde);
        console.log();
        }

        console.log('Fila azul: ');
        if (this.fila_azul.length == 0) {
            console.log('Fila vazia.');
            console.log();
        } else {
        console.log(this.fila_azul);
        console.log();
        }
    }
}