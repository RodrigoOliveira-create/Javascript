//Operador lógico e (&&) as duas condições devem ser verdadeiras para retornar verdadeiro
// Operador lógico e (||) uma das condições deve ser verdadeira para o resultado ser verdadeiro
//console.log (false && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log ('Apto ao trabalho', podeAplicar);
let candidatoReprovado = !podeAplicar;
console.log (' O candidato está Reprovado ', candidatoReprovado);
//Falsy
//undefined
//null
//0
//false
//''
//NaN - not a number
//Truthy

let corPersonalizada = 'Vermelha';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);
//Vai ler a primeira cor, pois o operador|| precisa de apenas uma verdadeira, caso eu coloque && ele vai ler a ultima 
