import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente, ClienteDocument } from '../../dominio/clientes/cliente.model';

export class ClienteRepository {
  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>,
  ) {}

  async criar(cliente: Cliente): Promise<Cliente> {
    const novoCliente = new this.clienteModel(cliente);
    return novoCliente.save();
  }

  async encontrarPorId(id: string): Promise<Cliente> {
    return this.clienteModel.findById(id).populate('contas').exec();
  }
}
