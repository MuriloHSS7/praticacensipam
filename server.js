const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cros());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mm@225566',
    database: 'roleta'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao Mysql!');
})

app.post('/login',(req, res) => {
    const {email, password} = req.body;
    const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json({ success: true, tipo: result[0].tipo });
        } else {
            res.json({ success: false });
        }
    });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));