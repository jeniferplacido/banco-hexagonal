// Importa o decorador Injectable do pacote @nestjs/common para permitir a injeção de dependências
import { Injectable } from '@nestjs/common';
// Importa a classe GerenteRepository de um diretório específico para interagir com o repositório de gerentes
import { GerenteRepository } from '../../portas/repositories/gerente.repository';
// Importa a classe ClienteService de um arquivo local para usar seus métodos relacionados a clientes
import { ClienteService } from './cliente.service';
// Importa a classe Gerente de um diretório específico para criar instâncias de gerente
import { Gerente } from '../gerentes/gerente.model';

// Utiliza o decorador @Injectable para marcar a classe GerenteService como elegível para injeção de dependências
@Injectable()
export class GerenteService {
  // Construtor da classe GerenteService com injeção de dependências para GerenteRepository e ClienteService
  constructor(
    private readonly gerenteRepository: GerenteRepository, // Injeta uma instância de GerenteRepository
    private readonly clienteService: ClienteService, // Injeta uma instância de ClienteService
  ) {}

  // Método assíncrono para criar um novo gerente, aceita um nome como parâmetro e retorna uma promessa de Gerente
  async criarGerente(nome: string): Promise<Gerente> {
    const gerente = new Gerente(); // Cria uma nova instância de Gerente
    gerente.nome = nome; // Atribui o nome fornecido à instância de Gerente
    return this.gerenteRepository.criar(gerente); // Chama o método criar do repositório de gerentes e retorna o resultado
  }

  // Método assíncrono para encontrar um gerente por ID, retorna uma promessa de Gerente
  async encontrarGerentePorId(id: string): Promise<Gerente> {
    return this.gerenteRepository.encontrarPorId(id); // Retorna o resultado do método encontrarPorId do repositório de gerentes
  }

  // Método assíncrono para adicionar um cliente a um gerente, aceita IDs de gerente e cliente, não retorna nada
  async adicionarCliente(gerenteId: string, clienteId: string) {
    const gerente = await this.gerenteRepository.encontrarPorId(gerenteId); // Encontra o gerente pelo ID fornecido
    await this.gerenteRepository.adicionarCliente(gerente, clienteId); // Chama o método adicionarCliente do repositório de gerentes
  }

  // Método assíncrono para remover um cliente de um gerente, aceita IDs de gerente e cliente, não retorna nada
  async removerCliente(gerenteId: string, clienteId: string) {
    const gerente = await this.gerenteRepository.encontrarPorId(gerenteId); // Encontra o gerente pelo ID fornecido
    await this.gerenteRepository.removerCliente(gerente, clienteId); // Chama o método removerCliente do repositório de gerentes
  }
}