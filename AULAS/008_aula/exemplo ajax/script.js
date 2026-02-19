var campoTexto = document.querySelector("#nome");
var img = document.querySelector("#resultImage");
var btn = document.querySelector("#button");
var status = document.querySelector("#status");
var form = document.querySelector("#searchForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  enviaRequisicao();
});

btn.addEventListener("click", enviaRequisicao);

function setStatus(text) {
  if (status) status.textContent = text;
}

function enviaRequisicao() {
  var url, chave_api;
  if (!campoTexto.value || !campoTexto.value.trim()) {
    setStatus("Por favor, digite um termo para buscar.");
    return;
  }

  chave_api = "563492ad6f9170000100000182cfa5251b204eb7954b4d9fd8c1a8f8";
  url = "https://api.pexels.com/v1/search?query=" + encodeURIComponent(campoTexto.value.trim());
  console.log(url);

  btn.disabled = true;
  setStatus("Carregando...");
  img.classList.remove('loaded');

  var requisicao = new XMLHttpRequest();
  requisicao.onload = manipulaResposta;
  requisicao.onerror = function () {
    setStatus('Erro na requisição. Tente novamente.');
    btn.disabled = false;
  };
  requisicao.open("GET", url);
  requisicao.setRequestHeader("Authorization", chave_api);
  requisicao.send();

  function manipulaResposta() {
    try {
      var response = JSON.parse(requisicao.responseText);
      console.log(response);
      if (!response.photos || response.photos.length === 0) {
        setStatus('Nenhuma imagem encontrada. Tente outro termo.');
        img.src = '';
        img.alt = 'Nenhuma imagem disponível';
        btn.disabled = false;
        return;
      }

      var photo = response.photos[0];
      img.alt = photo.photographer || 'Imagem encontrada';
      // Carrega imagem e mostra com transição
      img.onload = function () {
        img.classList.add('loaded');
        setStatus('Pronto.');
        btn.disabled = false;
      };
      img.src = photo.src.large2x;  Q//acessa o objeto JSON entregue pelo site.
    } catch (err) {
      console.error(err);
      setStatus('Erro ao processar resposta.');
      btn.disabled = false;
    }
  }
}