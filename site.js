var botao = document.getElementById("botao");

function criarTabela(conteudo) {
  var tabela = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody=document.createElement("tbody");
  var thd=function(i){return (i==0)?"th":"td";};
  for (var i=0;i<conteudo.length;i++) {
    var tr = document.createElement("tr");
    for(var o=0;o<conteudo[i].length;o++){
      var t = document.createElement(thd(i));
      var texto=document.createTextNode(console.log(conteudo[i][o]));
      t.appendChild(texto);
      tr.appendChild(t);
    }
    (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
  }
  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  return tabela;
}


function getapiinfo()
{
  fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => table(json))

  
    
}


getapiinfo();


function table(json)
{
    var table = document.createElement('table');
    for (var i = 1; i < json.length; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode(json[i].title);
    var text2 = document.createTextNode(json[i].body);

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
  }
  document.body.appendChild(table);

}
