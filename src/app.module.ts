import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from './dominio/clientes/cliente.module';
import { ContaModule } from './dominio/contas/conta.module';
import { GerenteModule } from './dominio/gerentes/gerente.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/banco'),
    ClienteModule,
    ContaModule,
    GerenteModule,
  ],
})
export class AppModule {}
