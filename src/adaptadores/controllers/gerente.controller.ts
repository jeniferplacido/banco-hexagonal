import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { GerenteService } from '../../dominio/services/gerente.service';
import { Gerente } from '../../dominio/gerentes/gerente.model';

@Controller('gerentes')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Get(':id')
  async encontrarGerente(@Param('id') id: string): Promise<Gerente> {
    return this.gerenteService.encontrarGerentePorId(id);
  }

  @Post()
  async criarGerente(@Body('nome') nome: string): Promise<Gerente> {
    return this.gerenteService.criarGerente(nome);
  }
}
