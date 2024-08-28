import cors from 'cors';
import https from 'https';
import fs from 'fs';
import express from 'express';


const app = express();
app.use(express.json());
app.use(cors());

import  rota from './rotas.js';
app.use(rota);

app.listen(3000, () => {
    console.log('Servidor HTTP rodando na porta 3000')
});

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(443, () => {
    console.log('Servidor HTTPS rodando na porta 443')
});