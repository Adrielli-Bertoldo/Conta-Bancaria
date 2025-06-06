import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";  

export class ContaController implements ContaRepository {
    
    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    visualizar(): void {
        this.listarTodas();
    }

    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

