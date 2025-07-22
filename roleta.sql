-- CRIAÇÃO DA TABELA USUÁRIOS
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(255),
    tipo ENUM('comum' , 'admin')
);

-- CRIAÇÃO DA TABELA TEXTOS_ROLETA
CREATE TABLE textos_roleta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto VARCHAR(255),
    ativo BOOLEAN DEFAULT true
);