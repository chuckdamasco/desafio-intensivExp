// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 7
let numberTwo = 5

let sum = numberOne + numberTwo

alert(sum)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 10

if (typeof isNumber == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isString = 'Isso é uma string'

if (typeof isString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBoolean = true

if (typeof isBoolean == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// Você pode criar outras variáveis ou pode usar as do exercício 2.
// Na resolução dos exercícios 1 ao 8 vamos usar as variáveis do exercício 2.
// Teste mudando os números das variáveis numberOne e numberTwo.

let sub = numberOne - numberTwo

alert(sub)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let mult = numberOne * numberTwo

alert(mult)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let div = numberOne / numberTwo

alert(div)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let isEvenNumber = 4

if (isEvenNumber % 2 == 0) {
  alert('É par')
} else {
  alert('Não é par')
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É ímpar')
} else {
  alert('Não é ímpar')
}