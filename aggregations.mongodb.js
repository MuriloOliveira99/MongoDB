/********************
- AGGREGATION
 ********************/

/*
$bucket -> Tem como objetivo agrupar resultados
- Definiremos como um grupo deve ser classificado,
  baseado em um campo
- e receberemos uma contagem de dados neste grupo
*/

// agrupa por rating
//1 a 2, 2 a 3, 3 a 4, 4 a 5, 5 a 6.
db.restaurants.aggregate([
    {
        $bucket: {
            groupBy: "$rating", // agrupar pelo raing
            boundaries: [1, 2, 3, 4, 5, 6], // quais os grupos
            default: "OTHERS",
            output: {
                "count": {$sum: 1} // a saida sera um count
            }
        }
    }
])


/*
$bucketAuto -> Define os buckets de uma forma mais automatizada
- definimos um campo e quantos buckets queremos receber
- e o mongo se encarrega em dividir os dados

Resultados:
{ _id: { min: '*NEW*', max: 'Desserts' }, count: 1381 }, 
{ _id: { min: 'Desserts', max: 'Polish' }, count: 1015 },
{ _id: { min: 'Polish', max: 'Vietnamese' }, count: 152 }
*/
db.restaurants.aggregate([
    {
        $bucketAuto: {
          groupBy: '$type_of_food',
          buckets: 3 // qtd. de bucktes a ser criado
        }
    }
])

/*
$collStatus -> Tem como objetivo retornar dados de uma collection
- Retorna banco, collection, hora atual, cont. de registros
- também pode retornar shards, qtd. de queries executadas e mais.

{
ns: 'comercio.restaurants',
host: 'DESKTOP-1EN88RT:27017',
localTime: ISODate("2023-05-06T16:39:09.879Z"),
count: 2548,
queryExecStats: { collectionScans: { total: Long("28"), nonTailable: Long("28") } }
}

*/
db.restaurants.aggregate([
    {
        $collStats: {
            queryExecStats: {},
            count: {}
        }
    }
])


/*
$sort -> ordenar os resultados
baseando-se em algum campo (1 crescete, -1 decrescente)
*/
db.restaurants.aggregate([
    {
        $sort: {
          rating: -1 // rating decrescente
        }
    }
])

/*
$limit -> limitando os resultados
*/
db.restaurants.aggregate([
    {$sort: {rating: -1}},
    {$limit: 5}
])

/*
$match -> Determinar um filtro para os resultados
SE POSSÍVEL UTILIZAR NO PRIMEIRO PASSO
*/
db.restaurants.aggregate([
    {
        $sort: {
            rating: 1
        }
    },
    {
        $match: {
            type_of_food: 'Curry'
        }
    },
    {
        $limit: 5
    }
])

/*
$out -> permite criar uma collection a partir da aggregation
ou seja, o retorno da agregacao serão inseridos 
em uma nova collection. Tendo assim só os dados filtrados
sshow collections -> para verificar as collections
*/
db.restaurants.aggregate([
    {
        $match: {
            rating: 'Not yet rated' // seleciona rating = 'Not yet rated'
        }
    },
    {$out: 'rating_nao_classificado'} // cria uma nova collection com rating = 'Not yet rated'
])

/*
$project -> retornar apenas os campos que iremos utilizr
*/
db.restaurants.aggregate([
    { $match: {
      rating: 5
    }},
    {
        $project: {
          name: 1,
          outcode: 1,
          postcode: 1,
          rating: 1,
          type_of_food: 1,
          _id: 0
        }
    }
])

/*
$sample -> retorna uma amostra aleatória
*/
db.restaurants.aggregate([
    {
        $match: {
            type_of_food: 'Chinese'
        }
    },
    {
        $sample: {$size: 10}
    }
])

/*
$skip -> pula determinada linha(s)
*/
db.restaurants.aggregate([
    {
        $match: {
            type_of_food: 'Chinese'
        }
    },
    {$skip: 5},
    {$limit: 10},
])

/*
$unwind -> desconstroi uma lista
permitindo trabalhar com o resultado de cada item da lista desconstruida.
ou seja, itera em cada item da lista
Exemplo: hobbies: [ 'Futebol', 'Ler', 'Estudar' ]
Resultado:
{hobbies: 'Futebol'},
{hobbies: 'Ler'},
{hobbies: 'Estudar'},
*/
db.clientes.aggregate([
    {$unwind: "$hobbies"},
    {$project: {_id: 0, hobbies: 1}}
])

/*
$sortByCount -> ordena os resultados por um campo específico
Resultado:
{ _id: 'Praticar esportes', count: 2 }
O hobbie 'Praticar esportes' aparece 2 vezes
*/
db.clientes.aggregate([
    {$unwind: "$hobbies"},
    {$sortByCount: "$hobbies"}
])

/*
$unset -> remove um ou mais campos de retorno da aggregation
se for um campo, basta inserir o valor como string,
se for mais, inserir como array
*/
db.restaurants.aggregate([
    {$match: {type_of_food: 'Chinese'}},
    {$unset: ['_id', 'URL']} //$unset: '_id'}
])

/*
$count -> Retorna a contagem dos dados na aggregation
*/

// existem 174 restaurants que possuem o type_of_food == 'Chinese'
db.restaurants.aggregate([
    {$match: {type_of_food: 'Chinese'}},
    {$count: 'Contagem'}
])

// existem 600 restaurants com rating == 5
db.restaurants.aggregate([
    {$match: {rating: 5.5}},
    {$count: 'contagemRating'}
])