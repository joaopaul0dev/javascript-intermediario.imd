function FabricasCarros(modelo, material) {
    this.modelo = modelo;
    this.cor = cor;
    this.bateria = 100;

    this.pegarInfo = () => "o carro ", modelo, 'tem atualmente', bateria, '%' 
}

let carro1 = new FabricasCarros('Fiat', 'prata')
let carro2 = new FabricasCarros('corolla', 'preto');

console.log(carro1.pegarInfo)

const keyCarro = Object.keys(FabricasCarros);

//console.log(keyCarro)   //metodo retorna um array contendo os elementos de objeto

const entriesCarro = Object.entries(FabricasCarros);
//console.log(entriesCarro)   //metodo retorna uma matriz atrinuto/valor contendo os elementos de objeto

