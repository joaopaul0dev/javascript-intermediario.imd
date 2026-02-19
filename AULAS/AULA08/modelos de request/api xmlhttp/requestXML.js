function requestListener() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}

function requestError(err) {
  console.log("Erro na requisição!", err);
}

var request = new XMLHttpRequest();
request.onload = requestListener;
request.onerror = requestError;
request.open("GET", "http://imd.ufrn.br/api/dados.json", true);
request.send();