import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conta, ContaDocument } from '../../dominio/contas/conta.model';

export class ContaRepository {
  constructor(
    @InjectModel(Conta.name) private contaModel: Model<ContaDocument>,
  ) {}

  async criar(conta: Conta): Promise<Conta> {
    const novaConta = new this.contaModel(conta);
    return novaConta.save();
  }

  async encontrarPorId(id: string): Promise<Conta> {
    return this.contaModel.findById(id).exec();
  }
}
