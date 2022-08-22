//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => fizzbuz

for (var i = 1; i<=30; i++)
  if (i % 3 == 0 && i % 5 ==0){
    console.log('Fizzbuz');
  }else if (i % 3 ==0){
    console.log ('Fizz');
} else if (i % 5 == 0){
  console.log('Buzz');
}else{
console.log(i);
  }
