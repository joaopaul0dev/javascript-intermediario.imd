let sem = ['seg', 'ter', 'qua','qui']   //LENGHT, UNSHIFT, PUSH, POP, SHIFT
//console.log(arr.length) //retorna a quantidade de variaveis no array
//arr.unshift('dom');  //adiciona ao inicio
//arr.push('sex');     //adiciona ao final
//arr.pop();    //retira no inicio
//arr.shift();  //retira no final
//console.log(arr)

let array = ['p0', 'p1', 'p2','p3', 'p4', 'p5'] //SPLICE/SLICE

//array.splice(0,1) //remove itens do array de acordo com o indice e a qntd. de itens removidos passados como parametros.
//array.splice(0,0, 'New p0') //altera o conteudo da array de posicao 0, adicionando 'New p0'
//let slice = array.slice(2, 4); //cria uma copia do array 'arr' a paritr da posicao 2 ate a posicao 4.
//console.log(array)

let varAny = [true, 3.14, Math.E, null]

let cidades = ['natal','fortaleza', 'sp']
//cidades[2] = 'ipanema'

let minhaCidade = cidades[0]
//console.log(minhaCidade)
//console.log(cidades)

let arr1 = ['p0', 'p1'] //CONCAT
let arr2 = ['p2', 'p3']

//let concat = arr1.concat(arr2)

//console.log(concat)

let nomes = ['artuh', 'pedro', 'silva', 'paulo']    //FOREACH

//nomes.forEach(function ImprimirNome(nome, index, teste) { //percorre todos os itens do array nomes e passa pela funcao ImprimirNome
//    console.log('index:', index, nome)})


let num = [10, 20, 30, 40, 50]; //EVERY/SOME
//let everyTrintaMais = num.every(n =>{return n > 30}) //every() retorna true se TODOS elementos de um arr satisfazem uma afirmacao, em trintaMais verifica se todos elementos sao maiores que 30,
//let someTrintaMais = num.some(n =>{return n > 30}) //some() retorna true se UM elementos de um arr satisfazem uma afirmacao, em trintaMais verifica se todos elementos sao maiores que 30,
//console.log(everyTrintaMais,' - ',  someTrintaMais)

let word = ['universidade','web', 'java', 'alunos'] //FILTER
//let wordPequena = word.filter(word => word.length > 6);    //cria um novo array com todos os elementos que satisfazem determinada condicao.
//console.log(wordPequena);

let basic = [1,4,9,18]  //MAP
//let dobro = basic.map(x => x * 2);  //executa uma funcao com todos os elementos de uma array original e retorna uma nova array
//console.log(dobro)

let basic2 = [1,4,9,16] //REDUCE
//let acumulado = basic2.reduce((acumulado, valor) => valor + acumulado ) //percorre por todos elementos 
//console.log(acumulado)

let exemplo1 = ['bob', 'alice', 'carlos', 'joao'] //SORT, REVERSE
let exemplo2 = [1, 10, 13]

//console.log(exemplo1.sort())
//console.log(exemplo1.sort().reverse())
//console.log(exemplo2.sort())

let posicao = ['palavra', 'window', 'bob', 'tarrafa'] 
//var busca = posicao.indexOf('p3')

let valores = [100, 10, 3, 51]
//var busca = valores.find(valores => valores <= 3) //percorre todo o array e retorna o primeiro elemento que satisfaca a condicao
//var busca1 = valores.findIndex(valores => valores <= 3) //percorre todo o array e retorna o indice do elemento que satisfaca a condicao

//console.log(busca, busca1)


