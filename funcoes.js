
export async function inserirFornecedor(conn, data) {
    await conn('fornecedores').insert(data);
}

export async function listarFornecedores(conn) {
    return await conn('fornecedores').select('*');
}

export async function atualizarFornecedor(conn, id, data) {
    await conn('fornecedores').where({ id }).update(data);
}

export async function deletarFornecedor(conn, id) {
    await conn('fornecedores').where({ id }).del();
}


export async function inserirFuncionario(conn, data) {
    await conn('funcionarios').insert(data);
}

export async function listarFuncionarios(conn) {
    return await conn('funcionarios').select('*');
}

export async function atualizarFuncionario(conn, id, data) {
    await conn('funcionarios').where({ id }).update(data);
}

export async function deletarFuncionario(conn, id) {
    await conn('funcionarios').where({ id }).del();
}


export async function inserirUsuario(conn, data) {
    await conn('usuarios').insert(data);
}

export async function listarUsuarios(conn) {
    return await conn('usuarios').select('*');
}

export async function atualizarUsuario(conn, id, data) {
    await conn('usuarios').where({ id }).update(data);
}

export async function deletarUsuario(conn, id) {
    await conn('usuarios').where({ id }).del();
}


export async function inserirProduto(conn, data) {
    await conn('produtos').insert(data);
}

export async function listarProdutos(conn) {
    return await conn('produtos').select('*');
}

export async function atualizarProduto(conn, id, data) {
    await conn('produtos').where({ id }).update(data);
}

export async function deletarProduto(conn, id) {
    await conn('produtos').where({ id }).del();
}


export async function inserirVenda(conn, data) {
    await conn('vendas').insert(data);
}

export async function listarVendas(conn) {
    return await conn('vendas').select('*');
}

export async function atualizarVenda(conn, id, data) {
    await conn('vendas').where({ id }).update(data);
}

export async function deletarVenda(conn, id) {
    await conn('vendas').where({ id }).del();
}


export async function inserirCliente(conn, data) {
    await conn('clientes').insert(data);
}

export async function listarClientes(conn) {
    return await conn('clientes').select('*');
}

export async function atualizarCliente(conn, id, data) {
    await conn('clientes').where({ id }).update(data);
}

export async function deletarCliente(conn, id) {
    await conn('clientes').where({ id }).del();
}
