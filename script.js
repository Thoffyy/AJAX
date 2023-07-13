function buscarFilmePorPersonagem() {

  

  var nome = $("#buscaFilmePorNomePersonagemId").val();  

  $.get("https://swapi.co/api/people/?search=" + nome, popularTabela);

}


function criaLinha(data) {  

  var htmlFinal = 

      "<tr><td>" + data.title + "</td>" +

      "<td>" + data.episode_id + "</td>" +

      "<td>" + data.director + "</td></tr>";


  $("#tabelaFilmesId").append(htmlFinal);  

}

function popularTabela(data) {

  console.log(data.results[0].name);  

  $("#labelFilmeDeId").text(data.results[0].name);


  console.log(data.results[0].films);  

  $("#tabelaFilmesId").find("tr:gt(0)").remove();


  for(var i = 0; i < data.results[0].films.length; i++) {

      $.get(data.results[0].films[i], criaLinha);

  }

}