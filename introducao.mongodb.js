// baixar o MONGOSH para usar o MongoDB no Terminal

// criar/trocar banco de dados
// o banco só aparecerá quando criarmos uma collection e ter no minimo UM dado
use('pessoasData') 

// exibir todos os bancos
show('dbs')

// criar uma collection(tabela) pessoas e inserindo um dado
db.pessoas.insertOne({nome: 'Murilo', idade: 22, sexo: 'M'})

// deletar collections
db.pessoas.drop()

// deletar o banco
db.dropDatabase()

// exibir toda as collections
show('collections')

// inserir varios dados de uma vez
db.pessoas.insertMany([
    {
        nome: 'Murilo',
        idade: 70,
        profissao: 'Dados',
        esta_empregado: true 
    },
    {
        nome: 'João',
        idade: 40,
        profissao: 'Arquiteto',
        esta_empregado: false
    }
])

// SELECT -> retorna todos os dados
db.pessoas.find()

// WHERE -> retorna apenas quem está empregado
db.pessoas.find({ esta_empregado: true })

// COUNT -> retorna a quantidade de registros
db.pessoas.find().count()

/* 
UPDATE -> atualizar o dado
seleciona quem tem idade 22
muda o nome para 'Mario' e atualiza/insere uma nova coluna
*/
db.pessoas.updateOne(
    { idade: 22 }, // filtro
    {$set: {nome: 'Mario', esta_empregado: false}} 
)

// Atulizar 'esta_empregado: true' para todos
db.pessoas.updateMany(
    {}, // vazio para atualizar todos
    {$set: {esta_empregado: true}}
)

// adicionando uma nova coluna 'Salario' para todos
db.pessoas.updateMany(
    {},
    {$set: {salario: 5000}}
)

// atualiza/insere uma nova coluna para o João
db.pessoas.updateOne(
    {nome: 'João'},
    {$set: {procurando_emprego: false}}
)

// DELETE -. remove quem tem o nome == 'José'
// deleteMany()
db.pessoas.deleteOne({nome: 'José'})


// ***** OPERADORES ******

// retorna quem tem a idade >40
db.pessoas.find(
    {idade: {$gt: 30}}
)

// retorna quem tem idade >=40
db.pessoas.find(
    {idade: {$gte: 40}}
)

// retorna quem tem idade <40
db.pessoas.find(
    {idade: {$lt: 40}}
)

// retorna quem tem idade <= 40
db.pessoas.find(
    {idade: {$lte: 40}}
)

// select/update/delete dados com OPERADORES
db.pessoas.updateMany(
    {idade: {$gt: 40}},
    {$set: {prioridade: true}}
)

// Inserindo um dado com diversos tipos de dados
db.pessoas.insertOne({
    nome: 'Marcos', //string
    idade: 44, // numero
    hobbies: ['Correr', 'Ler', 'Trilhas'], // array
    esta_trabalhando: true, // booleano
    avaliacao: 9.5, // float
    data_cadastro: new Date(), // retorna a data/hora atual
    caracteristicas: { // documento
        cor_olhos: 'azuis',
        altura: 1.80,
        perfil: 'Extrovertida'
    } 
})

// ***** OPERADORES para UPDATE ******

// incrementar o salario
db.pessoas.updateOne(
    {nome: 'Mario'}, // filtro
    {$inc: {salario: 1000}} // incrementar +1000
)

// decremetar o salario
db.pessoas.updateOne(
    {nome: 'João'},
    {$inc: {salario: -2000}}
)

// INDEXES
db.pessoas.createIndex(
    {"nome": 1} // cria indice no campo 'nome' 
)

// verificar todo os index 
db.pessoas.getIndexes()

// verificar se o mongo esta usando o index
// winningPlan: {stage: IXSCAN} quer dizer q utilizou o index
db.pessoas.explain().find({nome: 'João'})

// DELETAR UM INDEX
db.pessoas.dropIndex('nome_1')