import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClienteDocument = Cliente & Document;

@Schema()
export class Cliente {
  @Prop({ required: true })
  nome: string;

  @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Conta' }] })
  contas: string[];
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
