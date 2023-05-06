// criar banco
use('loja')

// verificar qual banco está conectado
db

// criar collection 
// inserir os dados
db.clientes.insertMany([
    {
        "nome": "Murilo Oliveira",
        "ano_nascimento": 1999,
        "idade": 19,
        "cpf": 00000000000,
        "telefone": "(11) 98888-9999",
        "email": "murilooliveira99@gmail.com",
        "senha": "38924@abc",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "José Antônio",
            "numero": 165,
            "cidade": "Barueri",
            "estado": 'São Paulo',
            "sigla": 'SP'
        },
        "hobbies": [ 'Futebol', 'Ler', 'Estudar' ],
        "cliente_ouro": false,
        "avaliacao": 8.5
    },

    {
        "nome": "Bruna Souza",
        "ano_nascimento": 1995,
        "idade": 27,
        "cpf": 11111111111,
        "telefone": "(21) 97777-7777",
        "email": "brunasouza95@gmail.com",
        "senha": "a1b2c3d4e5",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "Avenida Paulista",
            "numero": 1000,
            "cidade": "São Paulo",
            "estado": "São Paulo",
            "sigla": "SP"
        },
        "hobbies": ["Dançar", "Viajar", "Cozinhar"],
        "cliente_ouro": false,
        "avaliacao": 7.8
    },

    {
        "nome": "Gustavo Silva",
        "ano_nascimento": 1988,
        "idade": 35,
        "cpf": 22222222222,
        "telefone": "(31) 96666-6666",
        "email": "gustavosilva88@hotmail.com",
        "senha": "7j6k5l4m3n2",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "Rua Bela Vista",
            "numero": 500,
            "cidade": "Belo Horizonte",
            "estado": "Minas Gerais",
            "sigla": "MG"
        },
        "hobbies": ["Ciclismo", "Fotografia", "Meditar"],
        "cliente_ouro": true,
        "avaliacao": 9.2
    },

    {
        "nome": "Isabela Martins",
        "ano_nascimento": 2001,
        "idade": 22,
        "cpf": 33333333333,
        "telefone": "(51) 95555-5555",
        "email": "isabelamartins01@hotmail.com",
        "senha": "qwerty123",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "Rua dos Andradas",
            "numero": 800,
            "cidade": "Porto Alegre",
            "estado": "Rio Grande do Sul",
            "sigla": "RS"
        },
        "hobbies": ["Yoga", "Ler", "Assistir séries"],
        "cliente_ouro": false,
        "avaliacao": 6.9
    },

    {
        "nome": "Lucas Oliveira",
        "ano_nascimento": 1990,
        "idade": 33,
        "cpf": 44444444444,
        "telefone": "(41) 94444-4444",
        "email": "lucasoliveira90@hotmail.com",
        "senha": "p@ssword123",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "Avenida Sete de Setembro",
            "numero": 2000,
            "cidade": "Curitiba",
            "estado": "Paraná",
            "sigla": "PR"
        },
        "hobbies": ["Jogar videogame", "Praticar esportes", "Assistir filmes"],
        "cliente_ouro": true,
        "avaliacao": 9.5
    },

    {
        "nome": "Camila Silva",
        "ano_nascimento": 1997,
        "idade": 25,
        "cpf": 11111111111,
        "telefone": "(21) 98888-7777",
        "email": "camilasilva97@gmail.com",
        "senha": "13456@xyz",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "Praia de Botafogo",
            "numero": 1500,
            "cidade": "Rio de Janeiro",
            "estado": 'Rio de Janeiro',
            "sigla": 'RJ'
        },
        "hobbies": [ 'Dançar', 'Viajar', 'Assistir séries' ],
        "cliente_ouro": true,
        "avaliacao": 9.2
    },

    {
        "nome": "Rafaela Santos",
        "ano_nascimento": 1995,
        "idade": 27,
        "cpf": 22222222222,
        "telefone": "(31) 98888-5555",
        "email": "rafaelasantos95@uol.com.br",
        "senha": "98765@def",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "Rua dos Bobos",
            "numero": 0,
            "cidade": "Belo Horizonte",
            "estado": 'Minas Gerais',
            "sigla": 'MG'
        },
        "hobbies": [ 'Pintar', 'Tocar violão', 'Praticar esportes' ],
        "cliente_ouro": false,
        "avaliacao": 7.8
    },

    {
        "nome": "Gustavo Souza",
        "ano_nascimento": 1990,
        "idade": 32,
        "cpf": 33333333333,
        "telefone": "(85) 98888-4444",
        "email": "gustavosouza90@uol.com.br",
        "senha": "24568@fgh",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "Av. Antônio Sales",
            "numero": 700,
            "cidade": "Fortaleza",
            "estado": 'Ceará',
            "sigla": 'CE'
        },
        "hobbies": [ 'Cozinhar', 'Caminhar', 'Assistir filmes' ],
        "cliente_ouro": true,
        "avaliacao": 9.7
    },

    {
        "nome": "Pedro Mendes",
        "ano_nascimento": 1985,
        "idade": 37,
        "cpf": 44444444444,
        "telefone": "(47) 98888-3333",
        "email": "pedromendes85@gmail.com",
        "senha": "78654@ijk",
        "pessoa_fisica": true,
        "endereco": {
            "rua": "Rua Sete de Setembro",
            "numero": 100,
            "cidade": "Blumenau",
            "estado": 'Santa Catarina',
            "sigla": 'SC'
        },
        "hobbies": [ 'Andar de bicicleta', 'Nadar', 'Fazer trilhas' ],
        "cliente_ouro": false,
        "avaliacao": 6.9
    },

    {
        "nome": "Mateus Soares",
        "ano_nascimento": 2009,
        "idade": 14,
        "cpf": 9438797853,
        "telefone": "(11) 98765-4321",
        "email": "mateussoares14@uol.net",
        "senha": "28923@kdsfh",
        "pessoa_fisica": true,
        "endereco": {
        "rua": "Rua Mateus Soares",
        "numero": 999,
        "cidade": "Alphaville",
        "estado": 'São Paulo',
        "sigla": 'SP'
        },
        "hobbies": [ 'Dormir', 'Comer', 'Escrever' ],
        "cliente_ouro": false,
        "avaliacao": 9.0
    }
])


// visualizar todos os dados
db.clientes.find()

// visualizar 2 dados
db.clientes.find().limit(2)

// visualizar apenas algumas colunas
db.clientes.find(
    {},
    {
        _id: 0,
        nome: 1,
        email: 1,
        cpf: 1,
        telefone: 1,
        pessoa_fisica: 1
    }
).limit(2)

// quantidade de registros
db.clientes.find().count()

// apenas clientes ouro
db.clientes.find(
    {cliente_ouro: true}
)

// todos clientes ouro receberão creditos: 500
db.clientes.updateMany(
    {cliente_ouro: true}, // filtro
    {$set: {creditos: 500}} 
)

// deletar um cliente
db.clientes.deleteOne({
    nome: 'Pedro Mendes',
    telefone: '(47) 98888-3333'
})

// maior que 9
db.clientes.find({
    avaliacao: {$gt: 9}
})

// maior ou igual a 9
db.clientes.find({
    avaliacao: {$gte: 9}
})

// menor que 8.5
db.clientes.find({
    avaliacao: {$lt: 8.5}
})

// menor ou igual a 8.5
db.clientes.find({
    avaliacao: {$lte: 8.5}
})

// exibe todos cliente ouro OU hobbies 'Ler'
db.clientes.find({
    $or: [
       {cliente_ouro: true},
       {hobbies: 'Ler'} 
    ]
})

// exibe todo mundo de MG OU hobbies 'Ler'
db.clientes.find({
    $or: [
        {hobbies: 'Ler'},
        {endereco: {sigla: 'MG'}}
    ]
})


// REGEX
// todos emails que começam com 'g'
// i é para igualar maiusculo/minusculo
db.clientes.find(
    {email: /^g/i},
    {_id: 0, email: 1}
)

// todos emails que terminam com 't'
db.clientes.find(
    {email: /t$/},
    {_id: 0, email: 1}
)

// todos os email que possuem '@hotmail'
db.clientes.find(
    {email: /@hotmail/}, // query
    {_id: 0, email: 1} // projecao
)

// exibe todo mundo que tem o hobbies 'Ler'
db.clientes.find({
    hobbies: 'Ler'
})

// exibe todo mundo que tem o hobbies 'Ler' OU 'Assistir séries'
db.clientes.find({
    hobbies: {
        $in: ['Ler', 'Assistir séries']
    } 
})

// exibe todo mundo que tem o hobbies 'Ler' E 'Assistir séries'
db.clientes.find({
    $and: [
        {hobbies: 'Ler'}, 
        {hobbies: 'Assistir séries'}
    ]
})

// $eq: retorna todos resultados q são iguais ao informado
db.clientes.find({
    idade: {$eq: 19}
})

// $ne: retorna todos resultados q não são iguais ao informado
db.clientes.find({
    idade: {$ne: 19}
})

// $exists -> retorna apenas dados que possuem determinado campo
// retorna todo mundo que tem o campo creditos
db.clientes.find({
    creditos: {$exists: true}
})

// $text -> faz uma busca sobre o texto do campo informado no filtro
// é preciso criar um indice em algum dos campos, se não ele não funciona
db.clientes.createIndex({email: 'text'}) // indice de texto
db.clientes.find({
    $text: {$search: '@gmail'}
})

// Retorna todo mundo que é de 'SP'
// subdocumento
db.clientes.find({
   'endereco.sigla': 'SP'
})