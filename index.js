import knex from "knex";
import knexfile from "./knexfile.js";
import { createTableFuncionarios, createTableFornecedores, createTableProdutos, createTableClientes, createTableVendas,createTableUsuarios } from "./createTables.js";
import { inserirDadosClientes, inserirDadosFuncionarios, inserirDadosUsuarios,inserirDadosVendas, inserirDadosProdutos, inserirDadosFornecedores } from "./funcoes.js";

const conexao = knex(knexfile);

// createTableFornecedores(conexao)
// createTableProdutos(conexao)
// createTableFuncionarios(conexao)
// createTableUsuarios(conexao)
// createTableClientes(conexao);
// createTableVendas(conexao)

// FAZENDO OS INSERTS NO BANCO DE DADOS


// await inserirDadosFornecedores(conexao, [
//   { nome_da_empresa: "Empresa A", cnpj: "00000000000100", endereco: "Rua A, 123", telefone: "(11) 99999-0001", email: "contato@empresaA.com", produtos_fornecidos: "Eletrônicos", data_cadastro: new Date() },
//   { nome_da_empresa: "Empresa B", cnpj: "11111111000111", endereco: "Rua B, 456", telefone: "(11) 99999-0002", email: "contato@empresaB.com", produtos_fornecidos: "Roupas", data_cadastro: new Date() },
//   { nome_da_empresa: "Empresa C", cnpj: "22222222000022", endereco: "Rua C, 789", telefone: "(11) 99999-0003", email: "contato@empresaC.com", produtos_fornecidos: "Alimentos", data_cadastro: new Date() },
//   { nome_da_empresa: "Empresa D", cnpj: "33333333000133", endereco: "Rua D, 101", telefone: "(11) 99999-0004", email: "contato@empresaD.com", produtos_fornecidos: "Cosméticos", data_cadastro: new Date() },
//   { nome_da_empresa: "Empresa E", cnpj: "44444444000144", endereco: "Rua E, 202", telefone: "(11) 99999-0005", email: "contato@empresaE.com", produtos_fornecidos: "Ferramentas", data_cadastro: new Date() }
// ]);


// await inserirDadosFuncionarios(conexao, [
//   {
//     nome: 'Ana Souza',
//     cpf: '123.456.789-01',
//     cargo: 'Atendente',
//     salario: 2500.00,
//     data_de_admissao: '2024-03-15',
//     telefone: '11987654321',
//     email: 'ana.souza@empresa.com',
//     status: 'ativo',
//   },
//   {
//     nome: 'Bruno Lima',
//     cpf: '234.567.890-12',
//     cargo: 'Gerente',
//     salario: 6500.00,
//     data_de_admissao: '2023-11-01',
//     telefone: '11988887777',
//     email: 'bruno.lima@empresa.com',
//     status: 'ativo',
//   },
//   {
//     nome: 'Carla Mendes',
//     cpf: '345.678.901-23',
//     cargo: 'Vendedor',
//     salario: 3200.00,
//     data_de_admissao: '2025-01-10',
//     telefone: '11999990000',
//     email: 'carla.mendes@empresa.com',
//     status: 'inativo',
//   },
//   {
//     nome: 'Diego Rocha',
//     cpf: '456.789.012-34',
//     cargo: 'Financeiro',
//     salario: 4200.00,
//     data_de_admissao: '2024-07-05',
//     telefone: '11977776666',
//     email: 'diego.rocha@empresa.com',
//     status: 'ativo',
//   },
//   {
//     nome: 'Elaine Alves',
//     cpf: '567.890.123-45',
//     cargo: 'RH',
//     salario: 3800.00,
//     data_de_admissao: '2022-09-20',
//     telefone: '11966665555',
//     email: 'elaine.alves@empresa.com',
//     status: 'ativo',
//   },
// ]);


// await inserirDadosProdutos(conexao,[
//   {
//     idForn: 1,
//     nome: 'Notebook Pro 14',
//     descricao: 'Tela 14", 16GB RAM, SSD 512GB',
//     preco: 5499.90,
//     quantidade: 20,
//     categoria: 'Eletrônicos',
//     data_cadastro: '2025-01-05',
//   },
//   {
//     idForn: 2,
//     nome: 'Camisa Polo',
//     descricao: 'Algodão, tamanho M, cor azul',
//     preco: 89.90,
//     quantidade: 150,
//     categoria: 'Vestuário',
//     data_cadastro: '2025-01-06',
//   },
//   {
//     idForn: 3,
//     nome: 'Café Torrado e Moído 500g',
//     descricao: 'Blend especial, moagem média',
//     preco: 29.50,
//     quantidade: 200,
//     categoria: 'Alimentos',
//     data_cadastro: '2025-01-07',
//   },
//   {
//     idForn: 4,
//     nome: 'Kit SkinCare',
//     descricao: 'Cleanser + Sérum + Hidratante',
//     preco: 159.00,
//     quantidade: 60,
//     categoria: 'Cosméticos',
//     data_cadastro: '2025-01-08',
//   },
//   {
//     idForn: 5,
//     nome: 'Jogo de Chaves',
//     descricao: 'Conjunto com 12 peças em aço carbono',
//     preco: 119.99,
//     quantidade: 80,
//     categoria: 'Ferramentas',
//     data_cadastro: '2025-01-09',
//   },
// ]);



// await inserirDadosUsuarios(conexao,[
//   {
//     idFunc: 1, // funcionário já cadastrado
//     nome: 'Administrador Geral',
//     email: 'admin@empresa.com',
//     senha: 'senhaSegura123', // idealmente criptografada
//     perfil: 'admin',
//     data_cricao: '2025-01-10',
//     status: 'ativo',
//   },
//   {
//     idFunc: 2,
//     nome: 'Bruno Lima',
//     email: 'bruno.lima@empresa.com',
//     senha: 'senhaBruno2025',
//     perfil: 'funcionário',
//     data_cricao: '2025-01-11',
//     status: 'ativo',
//   },
//   {
//     idFunc: 3,
//     nome: 'Carla Mendes',
//     email: 'carla.mendes@empresa.com',
//     senha: 'senhaCarla2025',
//     perfil: 'funcionário',
//     data_cricao: '2025-01-12',
//     status: 'ativo',
//   },
//   {
//     idFunc: 4,
//     nome: 'Diego Rocha',
//     email: 'diego.rocha@empresa.com',
//     senha: 'senhaDiego2025',
//     perfil: 'funcionário',
//     data_cricao: '2025-01-13',
//     status: 'ativo',
//   },
//   {
//     idFunc: 5,
//     nome: 'Elaine Alves',
//     email: 'elaine.alves@empresa.com',
//     senha: 'senhaElaine2025',
//     perfil: 'funcionário',
//     data_cricao: '2025-01-14',
//     status: 'ativo',
//   },
// ]);



// await inserirDadosClientes(conexao,[
//   {
//     nomeCompleto: 'João da Silva',
//     cpf: '123.456.789-00',
//     endereco: 'Rua das Acácias, 100 - São Paulo/SP',
//     telefone: '11998765432',
//     email: 'joao.silva@example.com',
//     data_cricao: '2025-01-10',
//     historico: 'Cliente desde 2023, compras recorrentes de eletrônicos.',
//   },
//   {
//     nomeCompleto: 'Maria Oliveira',
//     cpf: '234.567.890-11',
//     endereco: 'Av. Paulista, 1500 - São Paulo/SP',
//     telefone: '11991234567',
//     email: 'maria.oliveira@example.com',
//     data_cricao: '2025-01-11',
//     historico: 'Prefere pagamento via Pix, compras de vestuário.',
//   },
//   {
//     nomeCompleto: 'Carlos Pereira',
//     cpf: '345.678.901-22',
//     endereco: 'Rua das Flores, 55 - São Paulo/SP',
//     telefone: '11990001122',
//     email: 'carlos.pereira@example.com',
//     data_cricao: '2025-01-12',
//     historico: 'Compras mensais de alimentos.',
//   },
//   {
//     nomeCompleto: 'Ana Costa',
//     cpf: '456.789.012-33',
//     endereco: 'Rua Bela Vista, 230 - São Paulo/SP',
//     telefone: '11998887766',
//     email: 'ana.costa@example.com',
//     data_cricao: '2025-01-13',
//     historico: 'Cliente nova, primeira compra em 2025.',
//   },
//   {
//     nomeCompleto: 'Bruno Santos',
//     cpf: '567.890.123-44',
//     endereco: 'Av. Ipiranga, 900 - São Paulo/SP',
//     telefone: '11997776655',
//     email: 'bruno.santos@example.com',
//     data_cricao: '2025-01-14',
//     historico: 'Compras de ferramentas e acessórios.',
//   },
// ]);



// await inserirDadosVendas(conexao,[
//   {
//     idCli: 1,    // João da Silva
//     idFunc: 1,   // funcionário existente
//     idProd: 1,   // produto existente
//     data_cricao: '2025-01-15',
//     quantidade: 1,
//     valor_total: 5499.90,          // ex.: preço do produto 1
//     forma_pagamento: 'Cartão',
//     status_venda: 'Concluída',
//   },
//   {
//     idCli: 2,    // Maria Oliveira
//     idFunc: 2,
//     idProd: 2,
//     data_cricao: '2025-01-16',
//     quantidade: 3,
//     valor_total: 269.70,           // 3 * 89.90 (exemplo)
//     forma_pagamento: 'Pix',
//     status_venda: 'Concluída',
//   },
//   {
//     idCli: 3,    // Carlos Pereira
//     idFunc: 3,
//     idProd: 3,
//     data_cricao: '2025-01-17',
//     quantidade: 5,
//     valor_total: 147.50,           // 5 * 29.50 (exemplo)
//     forma_pagamento: 'Dinheiro',
//     status_venda: 'Pendente',
//   },
//   {
//     idCli: 4,    // Ana Costa
//     idFunc: 4,
//     idProd: 4,
//     data_cricao: '2025-01-18',
//     quantidade: 2,
//     valor_total: 318.00,           // 2 * 159.00 (exemplo)
//     forma_pagamento: 'Cartão',
//     status_venda: 'Concluída',
//   },
//   {
//     idCli: 5,    // Bruno Santos
//     idFunc: 5,
//     idProd: 5,
//     data_cricao: '2025-01-19',
//     quantidade: 1,
//     valor_total: 119.99,
//     forma_pagamento: 'Pix',
//     status_venda: 'Cancelada',
//   },
// ]);
