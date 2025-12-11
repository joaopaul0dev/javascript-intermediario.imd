var texto = '{ "funcionarios" : [' +
    '{ "nome":"Peter" , "sobrenome":"Parker" },' +
    '{ "nome":"Tony" , "sobrenome":"Stark" },' +
    '{ "nome":"Steve" , "sobrenome":"Rogers" } ]}';

var objeto = JSON.parse(texto);
console.log(objeto['funcionarios'][0].nome) //transforma objetos JSON no modelos JS

var objetoJS = {nome: "joao", idade: 32}; 

var objJSON = JSON.stringify(objetoJS) //transforma objetos JS no modelos JSON

console.log(objJSON)