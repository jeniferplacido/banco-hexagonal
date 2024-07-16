import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../../portas/repositories/cliente.repository';
import { Cliente } from '../clientes/cliente.model';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async criarCliente(nome: string): Promise<Cliente> {
    const cliente = new Cliente();
    cliente.nome = nome;
    return this.clienteRepository.criar(cliente);
  }

  async encontrarClientePorId(id: string): Promise<Cliente> {
    return this.clienteRepository.encontrarPorId(id);
  }
}
