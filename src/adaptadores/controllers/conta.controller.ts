import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ContaService } from '../../dominio/services/conta.service';
import { Conta } from '../../dominio/contas/conta.model';

@Controller('contas')// Importa os decoradores Controller, Get, Param, Post e Body do pacote @nestjs/common para criar controladores e manipular requisições HTTP
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
// Importa a classe ContaService de um diretório específico para usar seus métodos relacionados a contas bancárias
import { ContaService } from '../../dominio/services/conta.service';
// Importa a classe Conta de um diretório específico para criar e manipular instâncias de contas bancárias
import { Conta } from '../../dominio/contas/conta.model';

// Utiliza o decorador @Controller para definir a rota base 'contas' para este controlador
@Controller('contas')
export class ContaController {
  // Construtor da classe ContaController com injeção de dependência para ContaService
  constructor(private readonly contaService: ContaService) {}

  // Decorador @Get com parâmetro ':id' para definir uma rota que captura o ID de uma conta na URL
  @Get(':id')
  // Método assíncrono para encontrar uma conta pelo ID, utiliza @Param para extrair o 'id' da URL
  async encontrarConta(@Param('id') id: string): Promise<Conta> {
    // Chama o método encontrarContaPorId do serviço ContaService e retorna o resultado
    return this.contaService.encontrarContaPorId(id);
  }
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Get(':id')
  async encontrarConta(@Param('id') id: string): Promise<Conta> {
    return this.contaService.encontrarContaPorId(id);
  }

  @Post()
  async criarConta(
    @Body('tipo') tipo: string,
    @Body('saldo') saldo: number,
    @Body('clienteId') clienteId: string,
  ): Promise<Conta> {
    return this.contaService.criarConta(tipo, saldo, clienteId);
  }
}
