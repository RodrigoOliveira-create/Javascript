let corSites = "azul"; //Variavel que definimos na azul
function resetaCor(cor, tonalidade)
{  //função que reseta/altera a cor
  corSites = cor + ' ' + tonalidade;        // Aqui eu criei parametros, esse + ' ' + é a forma mais correta de se criar os espaços na string
};
console.log(corSites);
resetaCor("verde", "claro");
console.log(corSites);