// DECLARANDO AS VARIAVEIS//
function somar() {
  var numero1;
  var numero2;
  var resultado;
  // ATRIBUINDO VALORES //

  numero1 = window.prompt('Digite um número');
  numero2 = window.prompt('Digite outro número');
  // PROCESSAMENTO - CALCULO:
  //OPERADORES ARITMÉTICOS : / * + - %

  resultado = parseInt(numero1) + parseInt(numero2);

  //MOSTRAR RESULTADO:
  window.alert(resultado);
}

function subtrair() {
  var numero1;
  var numero2;
  var resultado;
  // ATRIBUINDO VALORES //

  numero1 = window.prompt('Digite um número');
  numero2 = window.prompt('Digite outro número');
  // PROCESSAMENTO - CALCULO:
  //OPERADORES ARITMÉTICOS : / * + - %

  resultado = parseInt(numero1) - parseInt(numero2);

  //MOSTRAR RESULTADO:
  window.alert(' O resultado é ' + resultado);
}

function multiplicar() {
  var numero1;
  var numero2;
  var resultado;
  // ATRIBUINDO VALORES //

  numero1 = window.prompt('Digite um número');
  numero2 = window.prompt('Digite outro número');
  // PROCESSAMENTO - CALCULO:
  //OPERADORES ARITMÉTICOS : / * + - %

  resultado = parseInt(numero1) * parseInt(numero2);

  //MOSTRAR RESULTADO:
  window.alert(' O resultado é ' + resultado);
}

function dividir() {
  var numero1;
  var numero2;
  var resultado;
  // ATRIBUINDO VALORES //

  numero1 = window.prompt('Digite um número');
  numero2 = window.prompt('Digite outro número');
  // PROCESSAMENTO - CALCULO:
  //OPERADORES ARITMÉTICOS : / * + - %

  resultado = parseInt(numero1) / parseInt(numero2);

  //MOSTRAR RESULTADO:
  window.alert(' O resultado é ' + resultado);
}

function verResto() {
  var numero1;
  var numero2;
  var resultado;

  numero1 = window.prompt('Digite um número:');
  numero2 = window.prompt('Digite outro número: ')

  resultado = parseInt(numero1) % parseInt(numero2);

  window.alert(' O resultado é ' + resultado);

}

function verData() {

  // Instanciando um objeto:

  data = new Date();
  window.alert('Hoje é ' + data.getDate() + ' / ' + data.getMonth() + ' / ' + data.getFullYear());
}

function verCalculo1() {
  var valor1;
  var valor2;
  var operacao;
  var calculo;
  var textoOperacao;

  valor1 = window.prompt('Digite um número: ');
  operacao = window.prompt('Escolha a operação\n+ Soma\n- Subtrair\n* Multiplicar\n / Dividir');
  valor2 = window.prompt('Digite outro número: ');
  //Transformar em número:
  valor1 = parseFloat(valor1);
  valor2 = parseFloat(valor2);
  //Processamento:
  if (operacao == '+') {
    calculo = valor1 + valor2;
    textoOperacao = 'Somar';
  } else if (operacao == '-') {
    calculo = valor1 - valor2;
    textoOperacao = 'Subtrair';
  } else if (operacao == '*') {
    calculo = valor1 * valor2;
    textoOperacao = 'Multiplicar';
  } else if (operacao == '/') {
    calculo = valor1 / valor2;
    textoOperacao = 'Duvidir';
  } else {
    calculo = 0;
    textoOperacao = 'Inválido';
    alert('Escolha uma operação válida!');
  }
  alert('Você escolheu: ' + textoOperacao + '\n' + valor1 + ' ' + operacao + ' ' + valor2 + ' = ' + calculo);
}

function verCalculo3() {
  var nota1;
  var nota2;
  var media;
  var resultado;
  nota1 = window.prompt('Digite a primeira nota: ');
  nota2 = window.prompt('Digite a segunda nota: ');
  nota1 = parseFloat(nota1);
  nota2 = parseFloat(nota2);
  media = (nota1 + nota2) / 2;
  if (media >= 6) {
    resultado = 'Ap';
  } else {
    resultado = 'Rp';
  }
  alert('Nota 1: ' + nota1 +
    '\nNota 2: ' + nota2 +
    '\nMédia: ' + media +
    '\nResultado: ' + resultado);
}

function verCalculo2() {
  var valor1;
  var valor2;
  var operacao;
  var calculo;

  valor1 = window.prompt('Digite um número: ');
  operacao = window.prompt('Escolha a operação\n+ Soma\n- Subtrair\n* Multiplicar\n / Dividir');
  valor2 = window.prompt('Digite outro número: ');
  //Transformar em número:
  valor1 = parseFloat(valor1);
  valor2 = parseFloat(valor2);
  //Processamento:
  switch (operacao) {
    case '+':
      calculo = valor1 + valor2;
      break;
    case '-':
      calculo = valor1 - valor2;
      break;
    case '*':
      calculo = valor1 * valor2;
      break;
    case '/':
      calculo = valor1 / valor2;
      break;
    default:
      calculo = 0;
      alert('Escolha uma operação válida!');
  }
  alert(valor1 + ' ' + operacao + ' ' + valor2 + ' = ' + calculo);
}


//Raiz da Calculadora

function extrairRaiz() {
  var numero;
  var resultado;

  numero = calc.tela.value;
  resultado = Math.sqrt(numero);
  calc.tela.value = resultado;
}

function apagaUm() {
  var numero = calc.tela.value;
  calc.tela.value = numero.substring(0, (numero.length - 1));
}