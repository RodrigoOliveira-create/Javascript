let permissao; // comum, gerente, diretor
permissao = 'Diretor';

switch (permissao) {
case ' Comum':
console.log ('usuario comum');
break;

case 'Gerente':

console.log ('usuário gerente')

case 'Diretor':
console.log ('usuário diretor');
break;

default:
console.log ('usuário não reconhecido!');
}