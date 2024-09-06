import cors from 'cors';
import express from 'express';


const app = express();
app.use(express.json());
app.use(cors());

import  rota from './rotas.js';
app.use(rota);

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor HTTP rodando na porta 3000')
});