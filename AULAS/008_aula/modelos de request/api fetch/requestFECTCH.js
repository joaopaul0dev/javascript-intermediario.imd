fetch("http://imd.ufrn.br/api/dados.json")
  .then(function (response) {
    response.json().then(data => console.log(data));
  })
  .catch(function (err) {
    console.log("Erro na requisição!", err);
  });