import { openDb } from "../configDB.js";

export default async function createTable(){
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Aluno (indice INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, ra TEXT, cpf TEXT)')
    })
}

export async function selectAlunos(req, res){
    openDb().then(db =>{
        db.all('SELECT * FROM Aluno').then(alunos => res.json(alunos));
    });
}

export async function selectAluno(req, res){
    let indice = req.body.indice;
    openDb().then(db =>{
        db.get('SELECT * FROM Aluno WHERE indice=?', [indice]).then(aluno => res.json(aluno));
    });
}

export async function insertAluno(req, res){
    let aluno = req.body;
    openDb().then(db =>{
        db.run('INSERT INTO Aluno ( nome, ra, cpf) VALUES (?,?,?)', [ aluno.nome, aluno.ra, aluno.cpf]);
        res.json({ 
            "statusCode": 200,
            "msg": 'Aluno inserido com sucesso!' 
        });
    });
}

export async function updateAluno(req, res){
    let aluno = req.body;
    openDb().then(db =>{
        db.run('UPDATE Aluno SET nome=?, ra=?, cpf=? WHERE indice=?', [aluno.nome, aluno.ra, aluno.cpf, aluno.indice]);
        res.json({ 
            "statusCode": 200,
            "msg": 'Aluno alterado com sucesso!' 
        });
    });
}

export async function deleteAluno(req, res){
    let indice = req.body.indice;
    openDb().then(db =>{
        db.get('DELETE FROM Aluno WHERE indice=?', [indice]).then(res => res);
        res.json({ 
            "statusCode": 200,
            "msg": 'Aluno deletado com sucesso!' 
        });
    });
}