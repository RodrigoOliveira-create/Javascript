const pessoa = {
 nome: 'Rodrigo',
 idade: 25
};
//Key-value
for (let chave in pessoa){
console.log(chave,pessoa['idade']);
}
const cores = ['vermelho', 'azul', 'verde'];
for (let indice in cores){
 console.log(indice,cores[indice])
}