import { Injectable } from '@nestjs/common';
import { ContaRepository } from '../../portas/repositories/conta.repository';
import { Conta } from '../../dominio/contas/conta.model';

@Injectable()
export class ContaService {
  constructor(private readonly contaRepository: ContaRepository) {}

  async criarConta(tipo: string, saldo: number, clienteId: string): Promise<Conta> {
    const conta = new Conta();
    conta.tipo = tipo;
    conta.saldo = saldo;
    conta.cliente = clienteId;
    return this.contaRepository.criar(conta);
  }

  async encontrarContaPorId(id: string): Promise<Conta> {
    return this.contaRepository.encontrarPorId(id);
  }
}
