export async function inserirDadosFornecedores(conn, inserir) {
    await conn('fornecedores').insert(inserir);
}
export async function inserirDadosFuncionarios(conn, inserir) {
    await conn('funcionarios').insert(inserir);
}
export async function inserirDadosUsuarios(conn, inserir) {
    await conn('usuarios').insert(inserir);
}
export async function inserirDadosProdutos(conn, inserir) {
    await conn('produtos').insert(inserir);
}
export async function inserirDadosVendas(conn, inserir) {
    await conn('vendas').insert(inserir);
}
export async function inserirDadosClientes(conn, inserir) {
    await conn('clientes').insert(inserir);
}