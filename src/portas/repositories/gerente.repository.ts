import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gerente, GerenteDocument } from '../../dominio/gerentes/gerente.model';

export class GerenteRepository {
  constructor(
    @InjectModel(Gerente.name) private gerenteModel: Model<GerenteDocument>,
  ) {}

  async criar(gerente: Gerente): Promise<Gerente> {
    const novoGerente = new this.gerenteModel(gerente);
    return novoGerente.save();
  }

  async encontrarPorId(id: string): Promise<Gerente> {
    return this.gerenteModel.findById(id).populate('clientes').exec();
  }

  async adicionarCliente(gerente: GerenteDocument, clienteId: string) {
    gerente.clientes.push(clienteId);
    await gerente.save();
  }

  async removerCliente(gerente: GerenteDocument, clienteId: string) {
    gerente.clientes = gerente.clientes.filter(cliente => cliente !== clienteId);
    await gerente.save();
  }
}
