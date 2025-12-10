function ImprimirNome() {
    console.log("Ola, mundo")
};

//ImprimirNome(); //chamada de funcao 

function calculoArea(area, comprimento) {
    let a = area * comprimento;
    console.log(a)
}

//calculoArea(10, 20);

function Ola(nome = 'estranho') { //valor do parametro inicializado
    console.log('ola', nome+'!')
}

//Ola('joao')
Ola();

function conversor(celsius) {
    let a = novequinto(celsius) + 32
    console.log(a)
}

function novequinto(numero) {
    return numero * (9/5);
    
}

conversor(15);

let fimDeSem = function (dia) {     //function atribuida dentro da var
    if (dia == 'sab' || dia == 'dom') {
        return true
    } else{
        return false
    }
}

console.log(fimDeSem('seg'))

let calc = (comprimento, altura) => {
    return comprimento * altura
}

console.log(calc(10, 20))