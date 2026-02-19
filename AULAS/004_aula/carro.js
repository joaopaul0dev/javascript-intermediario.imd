let carro = {
    combustivel: 'gasolina',
    cor: 'prata',
    potencia: 115, 

    passgeiros:['pedro', 'antony'],

    partida: function darPartida(){
        console.log('o carro está se movendo...')
    },

    parar: function parar() {
        console.log('o carro parou...')
    },

    motor: {
        modelo:'v8',
        cavalos: 100,
        potencia: 4800
    }
}