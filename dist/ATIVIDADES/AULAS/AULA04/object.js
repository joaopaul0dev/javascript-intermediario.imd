let carro = {   //objeto literal(determinado entre as chaves), usado para definir casos especificos sem precisar ficar instanciando novos
    'Combustivel': 'gasolina', //propriedades do objeto
    cor: 'prata', //tmb uma string so que sem caracteres especiais espaco
    potencia: 115,

    passageiros: ['pedro' , 'natasha'],//array com objetos indexados.

    mecanicos: {    
        funilaria: {
            nome: 'Daniel'
        },
        pintura: {
            nome: 'sansao',
            pintar(){console.log('o: '+ carro.mecanicos.pintura.nome, 'esta pintando belamente')}
        },
        carenagem: {
            nome: 'Marcos'
        }
    },
    
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

    aumentarPotencia(){
        this.potencia = 150;
    }
    
}
    function trocarCor(obj) {   //funcao que altera propriedade cor de carro
    carro.cor = 'azul'    
    }

    function adicionarPassageiro(obj) {
        carro.passageiros.push('joao')
    }


//for (let membro = 0; membro < carro.passageiros.length; membro++) {   //imprime nome de todos pertencente a array carro.passageiros
//    const element = carro.passageiros[membro];
//    console.log(element)
//}

//for (let nomeMecanicos in carro.mecanicos) {  //imprime nome de cada 
//    console.log(carro.mecanicos[nomeMecanicos].nome)   
//}

adicionarPassageiro(carro.passageiros)    

let corDocCarro = carro.cor; //metodos de acesso de propriedades.
let combustivel = carro["Combustivel"]

//carro.cor = 'branca'; //reatribuicao de valor existente da propriedades cor do objeto.
carro.piloto = 'Carlos'; //atribuicao de um novo atributo piloto e seu valor.
delete carro.potencia; //excluir a propriedade piloto do objeto carro.
//carro.mecanicos.pintura.pintar(); //acessa um metodo dentro do objeto aninhado
//console.log(carro)

//console.log(carro.passageiros[0].nome)   //acessar valore nome do objeto aninhado passageiro

//carro.partida();
//carro.parar();

console.log(carro)