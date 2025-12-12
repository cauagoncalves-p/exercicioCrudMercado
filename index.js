import knex from "knex";
import knexfile from "./knexfile.js";

import { 
    createTableFuncionarios, 
    createTableFornecedores, 
    createTableProdutos, 
    createTableClientes, 
    createTableVendas,
    createTableUsuarios 
} from "./createTables.js";

import {
    inserirFornecedor, listarFornecedores, atualizarFornecedor, deletarFornecedor,
    inserirFuncionario, listarFuncionarios, atualizarFuncionario, deletarFuncionario,
    inserirUsuario, listarUsuarios, atualizarUsuario, deletarUsuario,
    inserirProduto, listarProdutos, atualizarProduto, deletarProduto,
    inserirVenda, listarVendas, atualizarVenda, deletarVenda,
    inserirCliente, listarClientes, atualizarCliente, deletarCliente,
} from "./funcoes.js";

const conexao = knex(knexfile);

// createTableFornecedores(conexao);
// createTableProdutos(conexao);
// createTableFuncionarios(conexao);
// createTableUsuarios(conexao);
// createTableClientes(conexao);
// createTableVendas(conexao);


async function executar() {

    // ====== FORNECEDORES ======
     await inserirFornecedor(conexao, {
        nome_da_empresa: "Empresa A",
        cnpj: "00000000000100",
        endereco: "Rua A, 123",
        telefone: "(11) 99999-0001",
        email: "contato@empresaA.com",
        produtos_fornecidos: "Eletrônicos",
        data_cadastro: new Date()
    });

    const fornecedores = await listarFornecedores(conexao);
    await atualizarFornecedor(conexao, 1, { telefone: "(11)99999-0000" });
    await deletarFornecedor(conexao, 2);


    // ====== FUNCIONÁRIOS ======
    await inserirFuncionario(conexao, {
        nome: "Ana Souza",
        cpf: "123.456.789-01",
        cargo: "Atendente",
        salario: 2500.00,
        data_de_admissao: "2024-03-15",
        telefone: "11987654321",
        email: "ana.souza@empresa.com",
        status: "ativo"
    });

    const funcionarios = await listarFuncionarios(conexao);
    await atualizarFuncionario(conexao, 1, { salario: 3000 });
    await deletarFuncionario(conexao, 3);


    // ====== USUÁRIOS ======
    await inserirProduto(conexao, {
        idForn: 1,
        nome: "Notebook Pro 14",
        descricao: 'Tela 14", 16GB RAM, SSD 512GB',
        preco: 5499.90,
        quantidade: 20,
        categoria: "Eletrônicos",
        data_cadastro: "2025-01-05"
    });

    const usuarios = await listarUsuarios(conexao);
    await atualizarUsuario(conexao, 1, { status: "ativo" });
    await deletarUsuario(conexao, 5);


    // ====== PRODUTOS ======
     await inserirUsuario(conexao, {
        idFunc: 1,
        nome: "Administrador Geral",
        email: "admin@empresa.com",
        senha: "senhaSegura123",
        perfil: "admin",
        data_cricao: "2025-01-10",
        status: "ativo"
    });
    const produtos = await listarProdutos(conexao);
    await atualizarProduto(conexao, 1, { preco: 59.90 });
    await deletarProduto(conexao, 10);


    // ====== CLIENTES ======
      await inserirCliente(conexao, {
        nomeCompleto: "João da Silva",
        cpf: "123.456.789-00",
        endereco: "Rua das Acácias, 100 - São Paulo/SP",
        telefone: "11998765432",
        email: "joao.silva@example.com",
        data_cricao: "2025-01-10",
        historico: "Cliente desde 2023, compras recorrentes de eletrônicos."
    });
    const clientes = await listarClientes(conexao);
    await atualizarCliente(conexao, 1, { telefone: "11999998888" });
    await deletarCliente(conexao, 4);


    // ====== VENDAS ======
    await inserirVenda(conexao, {
        idCli: 1,
        idFunc: 1,
        idProd: 1,
        data_cricao: "2025-01-15",
        quantidade: 1,
        valor_total: 5499.90,
        forma_pagamento: "Cartão",
        status_venda: "Concluída"
    });;
    const vendas = await listarVendas(conexao);
    await atualizarVenda(conexao, 1, { status_venda: "Concluída" });
    await deletarVenda(conexao, 2);

}

executar();
