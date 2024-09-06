// import { pool } from "../configDB.js";
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'default',
    host: 'ep-wispy-truth-a4sikjb9-pooler.us-east-1.aws.neon.tech',
    database: 'verceldb',
    password: 'x9aXPO8VqCbz',
    port: 5432,
  ssl: {
    rejectUnauthorized: false
    }
});

export default async function createTable(){
    const result = await pool.query('CREATE TABLE IF NOT EXISTS Aluno (indice INTEGER PRIMARY KEY, nome TEXT, ra TEXT, cpf TEXT)');
}

export async function selectAlunos(req, res){
    const result = await pool.query('SELECT * FROM Aluno');
    res.status(200).json(result.rows)
}

export async function selectAluno(req, res){
    let indice = req.params.id;
    const result = await pool.query('SELECT * FROM Aluno WHERE indice=$1', [indice]);
    res.status(200).json(result.rows);
    // pool.then(pool =>{
        
    // });
}

export async function insertAluno(req, res){
    let aluno = req.body;
    try { 
        const query = `INSERT INTO Aluno(indice, nome, ra, cpf) VALUES ($1,$2,$3,$4)` ;
        const values = [aluno.indice, aluno.nome, aluno.ra, aluno.cpf];

        const result = await pool.query(query, values);
        res.json({ 
        "statusCode": 200,
        "msg": "Aluno inserido com sucesso!" 
    });
    } catch (e) {
        res.status(500).json({
            "msg": "Erro ao insrir aluno"
        })
        console.log(e)
    }   
}

export async function updateAluno(req, res){
    let aluno = req.body;
    const result = await pool.query('UPDATE Aluno SET nome=$2, ra=$3, cpf=$4 WHERE indice=$1', [ aluno.indice, aluno.nome, aluno.ra, aluno.cpf ]);
    res.json({ 
        "statusCode": 200,
        "msg": 'Aluno alterado com sucesso!' 
    });
}

export async function deleteAluno(req, res){
    let indice = req.body.indice;
    const result = await pool.query('DELETE FROM Aluno WHERE indice=$1', [indice]).then(res => res);
        res.json({ 
            "statusCode": 200,
            "msg": 'Aluno deletado com sucesso!' 
        });
}