import { Router } from "express";
import  createTable, { insertAluno, updateAluno, selectAlunos, selectAluno, deleteAluno } from './Controler/aluno.js';

const rota = Router();

rota.get('/', (req, res) => {
    res.json({
        "statuscode": 200,
        "msg": "OK - Rota default"
    });
});

rota.get('/alunos', selectAlunos);
rota.get('/aluno', selectAluno);
rota.post('/aluno', insertAluno);
rota.put('/aluno', updateAluno);
rota.delete('/aluno', deleteAluno);

export default rota;