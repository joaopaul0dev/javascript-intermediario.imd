var requisicao = new XMLHttpRequest(); //criar uma nova instancia do objeto: XMLHttpRequest():
requisicao.onload = manipulaResposta;
requisicao.open('GET', 'url', true); //abre uma requisicao com tres parametros: ação HTTP que será utilizada, 
// O segundo é a URL que solicita os dados, E o valor booleano que determina se e assicrona ou nao.
requisicao.send(); //envia a requisicao e manipula a resposta

function manipulaResposta(){
    console.log(requisicao.responseText);
}