import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContaDocument = Conta & Document;

@Schema()
export class Conta {
  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  saldo: number;

  @Prop({ type: Schema.Types.ObjectId, ref: 'Cliente' })
  cliente: string;
}

export const ContaSchema = SchemaFactory.createForClass(Conta);
