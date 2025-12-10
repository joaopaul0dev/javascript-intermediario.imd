let carro = {   //objeto literal(determinado entre as chaves), usado para definir casos especificos sem precisar ficar instanciando novos
    'Combustivel': 'gasolina', //propriedades do objeto
    cor: 'prata', //tmb uma string so que sem caracteres especiais espaco
    potencia: 115,
    
    partida: function darPartida() { //atribuicao de metodo no objeto
        console.log('o carro esta se movendo...')
    }, 
    parar(){
        console.log('o carro esta parado...')
    },

    motor: {    //objetos aninhados 
        modelo: 'V8',
        ano: 2017,
        potencia: 4800
    },
    passageiros: ['pedro' , 'natasha'],//array com objetos indexados.
}

    function trocarCor(obj) {   //funcao que altera propriedade cor de carro
    carro.cor = 'azul'    
    }

    function adicionarPassageiro(obj) {
        carro.passageiros.push('joao')
    }

adicionarPassageiro(carro.passageiros)    

let corDocCarro = carro.cor; //metodos de acesso de propriedades.
let combustivel = carro["Combustivel"]

//carro.cor = 'branca'; //reatribuicao de valor existente da propriedades cor do objeto.
carro.piloto = 'Carlos'; //atribuicao de um novo atributo piloto e seu valor.
delete carro.potencia; //excluir a propriedade piloto do objeto carro.

console.log(carro.passageiros)

//console.log(carro.passageiros[0].nome)   //acessar valore nome do objeto aninhado passageiro

//carro.partida();
//carro.parar();