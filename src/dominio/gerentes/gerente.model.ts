import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GerenteDocument = Gerente & Document;

@Schema()
export class Gerente {
  @Prop({ required: true })
  nome: string;

  @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Cliente' }] })
  clientes: string[];
}

export const GerenteSchema = SchemaFactory.createForClass(Gerente);
