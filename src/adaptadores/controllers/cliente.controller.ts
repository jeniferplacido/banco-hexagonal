// Importa os decoradores Controller, Get, Param, Post e Body do pacote @nestjs/common para criar controladores e manipular requisições
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
// Importa a classe ClienteService de um diretório específico para usar seus métodos relacionados a clientes
import { ClienteService } from '../../dominio/services/cliente.service';
// Importa a classe Cliente de um diretório específico para criar e manipular instâncias de clientes
import { Cliente } from '../../dominio/clientes/cliente.model';

// Utiliza o decorador @Controller para definir a rota base 'clientes' para este controlador
@Controller('clientes')
export class ClienteController {
  // Construtor da classe ClienteController com injeção de dependência para ClienteService
  constructor(private readonly clienteService: ClienteService) {}

  // Decorador @Get com parâmetro ':id' para definir uma rota que captura o ID de um cliente na URL
  @Get(':id')
  // Método assíncrono para encontrar um cliente pelo ID, utiliza @Param para extrair o 'id' da URL
  async encontrarCliente(@Param('id') id: string): Promise<Cliente> {
    // Chama o método encontrarClientePorId do serviço ClienteService e retorna o resultado
    return this.clienteService.encontrarClientePorId(id);
  }

  // Decorador @Post para definir uma rota que lida com requisições POST para criar um novo cliente
  @Post()
  // Método assíncrono para criar um novo cliente, utiliza @Body para extrair o 'nome' do corpo da requisição
  async criarCliente(@Body('nome') nome: string): Promise<Cliente> {
    // Chama o método criarCliente do serviço ClienteService e retorna o resultado
    return this.clienteService.criarCliente(nome);
  }
}
