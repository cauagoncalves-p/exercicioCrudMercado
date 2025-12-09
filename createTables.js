export async function createTableFornecedores(conn) {
    await conn.schema.createTable("Fornecedores", tabela =>{
        tabela.increments('idForn').primary().unsigned().notNullable()
        tabela.string('nome_da_empresa')
        tabela.string('cnpj', 25)
        tabela.string('endereco', 100)
        tabela.string('telefone')
        tabela.string('email')
        tabela.string('produtos_fornecidos')
        tabela.date('data_cadastro')
    })
    console.log("Tabela de fornecedor criada")
}

export async function createTableFuncionarios(conn) {
     await conn.schema.createTable('Funcionarios', tabela =>{
        tabela.increments('idFunc').primary().unsigned().notNullable()
        tabela.string('nome')
        tabela.string('cpf', 14)
        tabela.string('cargo')
        tabela.decimal('salario', 8,2)
        tabela.date('data_de_admissao')
        tabela.string('telefone', 11)
        tabela.string('email')
        tabela.enum('status', ['ativo', 'inativo'])
    })
    console.log("Tabela de funcionarios criada")
}

export async function createTableProdutos(conn) {
    await conn.schema.createTable("Produtos", tabela =>{
        tabela.increments('idProd')
        tabela.integer('idForn').unsigned().notNullable()
        tabela.string('nome')
        tabela.string('descricao')
        tabela.decimal('preco', 8, 2)
        tabela.integer('quantidade')
        tabela.string('categoria')
        tabela.date('data_cadastro')
        
        tabela.foreign('idForn').references('idForn').inTable('Fornecedores')
    })
    console.log("Tabela de produto criada")
}

export async function createTableUsuarios(conn) { 
    await conn.schema.createTable("Usuarios", tabela =>{
        tabela.increments('idUsu')
        tabela.integer('idFunc').unsigned().notNullable()
        tabela.string('nome')
        tabela.string('email')
        tabela.string('senha')
        tabela.enum('perfil', ['admin', 'cliente', 'funcionário'])
        tabela.date('data_cricao')
        tabela.enum('status', ['ativo', 'inativo'])

        tabela.foreign('idFunc').references('idFunc').inTable('Funcionarios')
    })
    console.log("Tabela de usuarios criada")
}

export async function createTableClientes(conn) {
    await conn.schema.createTable('Clientes', tabela =>{
        tabela.increments('idCli')
        tabela.string('nomeCompleto')
        tabela.string('cpf')
        tabela.string('endereco')
        tabela.string('telefone')
        tabela.string('email')
        tabela.date('data_cricao')
        tabela.string('historico')

    })
    console.log("Tabela de clientes criada")
}

export async function createTableVendas(conn) {
    await conn.schema.createTable('Vendas', tabela =>{
        tabela.increments('idVend')
        tabela.integer('idCli').unsigned().notNullable()
        tabela.integer('idFunc').unsigned().notNullable()
        tabela.integer('idProd').unsigned().notNullable()
        tabela.date('data_cricao')
        tabela.integer('quantidade')
        tabela.decimal('valor_total', 8.2)
        tabela.enum('forma_pagamento', ['Pix', 'Cartão', 'Dinheiro'])
        tabela.enum('status_venda', ['Concluída', 'Cancelada', 'Pendente'])

        tabela.foreign('idCli').references('idCli').inTable('Clientes')
        tabela.foreign('idFunc').references('idFunc').inTable('Funcionarios')
        tabela.foreign('idProd').references('idProd').inTable('Produtos')

    })
    console.log("Tabela de vendas criada")
}