require('dotenv').config();
const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: process.env.DB_HOST, //'localhost', // host do servidor Mysql
    user: process.env.DB_USER, // 'root', // 'root'
    password: process.env.DB_PASSWORD, // 'Mm@225566', // senha do mysql
    database: process.env.DB_NAME // 'test_db' // Nome do banco de dados
});

// Testar a conexão
connection.connect((err) => {
    if (err){
        console.error('Erro ao conectar ao Mysql:' , err);
        return;
    }
    console.log('Conexão com o Mysql estabelecida com sucesso!');
});

// Exemplo de consulta
connection.query('SELECT * FROM usuario' , (err, results) => {
    if (err) {
        console.error('Erro na consulta:' , err);
        return;
    }
    console.log('Resultados:' , results);
})

// Fechar a conexão
connection.end();