//conte de 1 a 30, todo divisor por 2 escreva babum, e divisor por 5 escreva hatunamatata, e caso possa ser dividido por 2 e 5 escreva hatunamatatababum
for ( var i = 1; i<=100; i++){
if ( i % 2 ==0){
console.log ('babum');
}else if ( i% 5 == 0){
console.log ('hatunamatata');
}else if (i% 2 ==0 && i % 5 == 0){
console.log ('hatunamatatababum');
}else{
console.log (i)
}
}