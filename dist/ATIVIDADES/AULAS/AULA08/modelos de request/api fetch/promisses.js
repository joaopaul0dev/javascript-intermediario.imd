var promessa = new Promise((resolve, reject) => { //argumentos: resolve() retornar o resultado final chamamos a funçãom, catch() retorna um erro
    setTimeout(() => resolve('terminou!'), 2000);
});

promessa
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log('deu erro!')); 