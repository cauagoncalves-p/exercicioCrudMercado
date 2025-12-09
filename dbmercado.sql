-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09/12/2025 às 15:55
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbmercado`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `idCli` int(10) UNSIGNED NOT NULL,
  `nomeCompleto` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `data_cricao` date DEFAULT NULL,
  `historico` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`idCli`, `nomeCompleto`, `cpf`, `endereco`, `telefone`, `email`, `data_cricao`, `historico`) VALUES
(1, 'João da Silva', '123.456.789-00', 'Rua das Acácias, 100 - São Paulo/SP', '11998765432', 'joao.silva@example.com', '2025-01-10', 'Cliente desde 2023, compras recorrentes de eletrônicos.'),
(2, 'Maria Oliveira', '234.567.890-11', 'Av. Paulista, 1500 - São Paulo/SP', '11991234567', 'maria.oliveira@example.com', '2025-01-11', 'Prefere pagamento via Pix, compras de vestuário.'),
(3, 'Carlos Pereira', '345.678.901-22', 'Rua das Flores, 55 - São Paulo/SP', '11990001122', 'carlos.pereira@example.com', '2025-01-12', 'Compras mensais de alimentos.'),
(4, 'Ana Costa', '456.789.012-33', 'Rua Bela Vista, 230 - São Paulo/SP', '11998887766', 'ana.costa@example.com', '2025-01-13', 'Cliente nova, primeira compra em 2025.'),
(5, 'Bruno Santos', '567.890.123-44', 'Av. Ipiranga, 900 - São Paulo/SP', '11997776655', 'bruno.santos@example.com', '2025-01-14', 'Compras de ferramentas e acessórios.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `fornecedores`
--

CREATE TABLE `fornecedores` (
  `idForn` int(10) UNSIGNED NOT NULL,
  `nome_da_empresa` varchar(255) DEFAULT NULL,
  `cnpj` varchar(25) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `produtos_fornecidos` varchar(255) DEFAULT NULL,
  `data_cadastro` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `fornecedores`
--

INSERT INTO `fornecedores` (`idForn`, `nome_da_empresa`, `cnpj`, `endereco`, `telefone`, `email`, `produtos_fornecidos`, `data_cadastro`) VALUES
(1, 'Empresa A', '00000000000100', 'Rua A, 123', '(11) 99999-0001', 'contato@empresaA.com', 'Eletrônicos', '2025-12-09'),
(2, 'Empresa B', '11111111000111', 'Rua B, 456', '(11) 99999-0002', 'contato@empresaB.com', 'Roupas', '2025-12-09'),
(3, 'Empresa C', '22222222000022', 'Rua C, 789', '(11) 99999-0003', 'contato@empresaC.com', 'Alimentos', '2025-12-09'),
(4, 'Empresa D', '33333333000133', 'Rua D, 101', '(11) 99999-0004', 'contato@empresaD.com', 'Cosméticos', '2025-12-09'),
(5, 'Empresa E', '44444444000144', 'Rua E, 202', '(11) 99999-0005', 'contato@empresaE.com', 'Ferramentas', '2025-12-09');

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `idFunc` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `salario` decimal(8,2) DEFAULT NULL,
  `data_de_admissao` date DEFAULT NULL,
  `telefone` varchar(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `status` enum('ativo','inativo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `funcionarios`
--

INSERT INTO `funcionarios` (`idFunc`, `nome`, `cpf`, `cargo`, `salario`, `data_de_admissao`, `telefone`, `email`, `status`) VALUES
(1, 'Ana Souza', '123.456.789-01', 'Atendente', 2500.00, '2024-03-15', '11987654321', 'ana.souza@empresa.com', 'ativo'),
(2, 'Bruno Lima', '234.567.890-12', 'Gerente', 6500.00, '2023-11-01', '11988887777', 'bruno.lima@empresa.com', 'ativo'),
(3, 'Carla Mendes', '345.678.901-23', 'Vendedor', 3200.00, '2025-01-10', '11999990000', 'carla.mendes@empresa.com', 'inativo'),
(4, 'Diego Rocha', '456.789.012-34', 'Financeiro', 4200.00, '2024-07-05', '11977776666', 'diego.rocha@empresa.com', 'ativo'),
(5, 'Elaine Alves', '567.890.123-45', 'RH', 3800.00, '2022-09-20', '11966665555', 'elaine.alves@empresa.com', 'ativo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `idProd` int(10) UNSIGNED NOT NULL,
  `idForn` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `data_cadastro` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`idProd`, `idForn`, `nome`, `descricao`, `preco`, `quantidade`, `categoria`, `data_cadastro`) VALUES
(1, 1, 'Notebook Pro 14', 'Tela 14\", 16GB RAM, SSD 512GB', 5499.90, 20, 'Eletrônicos', '2025-01-05'),
(2, 2, 'Camisa Polo', 'Algodão, tamanho M, cor azul', 89.90, 150, 'Vestuário', '2025-01-06'),
(3, 3, 'Café Torrado e Moído 500g', 'Blend especial, moagem média', 29.50, 200, 'Alimentos', '2025-01-07'),
(4, 4, 'Kit SkinCare', 'Cleanser + Sérum + Hidratante', 159.00, 60, 'Cosméticos', '2025-01-08'),
(5, 5, 'Jogo de Chaves', 'Conjunto com 12 peças em aço carbono', 119.99, 80, 'Ferramentas', '2025-01-09');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsu` int(10) UNSIGNED NOT NULL,
  `idFunc` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `perfil` enum('admin','cliente','funcionário') DEFAULT NULL,
  `data_cricao` date DEFAULT NULL,
  `status` enum('ativo','inativo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`idUsu`, `idFunc`, `nome`, `email`, `senha`, `perfil`, `data_cricao`, `status`) VALUES
(1, 1, 'Administrador Geral', 'admin@empresa.com', 'senhaSegura123', 'admin', '2025-01-10', 'ativo'),
(2, 2, 'Bruno Lima', 'bruno.lima@empresa.com', 'senhaBruno2025', 'funcionário', '2025-01-11', 'ativo'),
(3, 3, 'Carla Mendes', 'carla.mendes@empresa.com', 'senhaCarla2025', 'funcionário', '2025-01-12', 'ativo'),
(4, 4, 'Diego Rocha', 'diego.rocha@empresa.com', 'senhaDiego2025', 'funcionário', '2025-01-13', 'ativo'),
(5, 5, 'Elaine Alves', 'elaine.alves@empresa.com', 'senhaElaine2025', 'funcionário', '2025-01-14', 'ativo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vendas`
--

CREATE TABLE `vendas` (
  `idVend` int(10) UNSIGNED NOT NULL,
  `idCli` int(10) UNSIGNED NOT NULL,
  `idFunc` int(10) UNSIGNED NOT NULL,
  `idProd` int(10) UNSIGNED NOT NULL,
  `data_cricao` date DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `valor_total` decimal(8,2) DEFAULT NULL,
  `forma_pagamento` enum('Pix','Cartão','Dinheiro') DEFAULT NULL,
  `status_venda` enum('Concluída','Cancelada','Pendente') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `vendas`
--

INSERT INTO `vendas` (`idVend`, `idCli`, `idFunc`, `idProd`, `data_cricao`, `quantidade`, `valor_total`, `forma_pagamento`, `status_venda`) VALUES
(1, 1, 1, 1, '2025-01-15', 1, 5499.90, 'Cartão', 'Concluída'),
(2, 2, 2, 2, '2025-01-16', 3, 269.70, 'Pix', 'Concluída'),
(3, 3, 3, 3, '2025-01-17', 5, 147.50, 'Dinheiro', 'Pendente'),
(4, 4, 4, 4, '2025-01-18', 2, 318.00, 'Cartão', 'Concluída'),
(5, 5, 5, 5, '2025-01-19', 1, 119.99, 'Pix', 'Cancelada');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idCli`);

--
-- Índices de tabela `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD PRIMARY KEY (`idForn`);

--
-- Índices de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`idFunc`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idProd`),
  ADD KEY `produtos_idforn_foreign` (`idForn`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsu`),
  ADD KEY `usuarios_idfunc_foreign` (`idFunc`);

--
-- Índices de tabela `vendas`
--
ALTER TABLE `vendas`
  ADD PRIMARY KEY (`idVend`),
  ADD KEY `vendas_idcli_foreign` (`idCli`),
  ADD KEY `vendas_idfunc_foreign` (`idFunc`),
  ADD KEY `vendas_idprod_foreign` (`idProd`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idCli` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `fornecedores`
--
ALTER TABLE `fornecedores`
  MODIFY `idForn` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  MODIFY `idFunc` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idProd` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsu` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `vendas`
--
ALTER TABLE `vendas`
  MODIFY `idVend` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `produtos_idforn_foreign` FOREIGN KEY (`idForn`) REFERENCES `fornecedores` (`idForn`);

--
-- Restrições para tabelas `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_idfunc_foreign` FOREIGN KEY (`idFunc`) REFERENCES `funcionarios` (`idFunc`);

--
-- Restrições para tabelas `vendas`
--
ALTER TABLE `vendas`
  ADD CONSTRAINT `vendas_idcli_foreign` FOREIGN KEY (`idCli`) REFERENCES `clientes` (`idCli`),
  ADD CONSTRAINT `vendas_idfunc_foreign` FOREIGN KEY (`idFunc`) REFERENCES `funcionarios` (`idFunc`),
  ADD CONSTRAINT `vendas_idprod_foreign` FOREIGN KEY (`idProd`) REFERENCES `produtos` (`idProd`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
