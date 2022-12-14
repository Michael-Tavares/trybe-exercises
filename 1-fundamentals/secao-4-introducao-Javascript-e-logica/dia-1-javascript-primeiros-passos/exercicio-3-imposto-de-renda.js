/*
Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.
*/
let salarioBruto = 10000;
let salarioBase;
let salarioLiquido;
let inss;
let ir;
let descontoIr;

if (salarioBruto >= 1000 && salarioBruto <= 1556.94) {
  inss = (salarioBruto * 8) / 100;
  salarioBase = salarioBruto - inss;
  if (salarioBase <= 1903.98) {
    console.log(`Olá, o seu salário bruto é R$ ${salarioBruto.toFixed(2)}, nele foi descontado R$ ${inss.toFixed(2)} de INSS, você é isento de Imposto de Renda, tornando seu salário de R$ ${salarioBase.toFixed(2)}`);
  }
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = (salarioBruto * 9) / 100;
  salarioBase = salarioBruto - inss;
  if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = (salarioBase * 7.5) / 100;
    descontoIr = ir - 142.8;
    salarioLiquido = salarioBase - descontoIr;
    console.log(`Olá, o seu salário bruto é R$ ${salarioBruto.toFixed(2)}, nele foi descontado R$ ${inss.toFixed(2)} de INSS, tornando seu salário base de R$ ${salarioBase.toFixed(2)} e nele foi descontado R$ ${descontoIr.toFixed(2)} de Imposto de Renda e com isso o seu salário líquido é R$ ${salarioLiquido.toFixed(2)}`);
  }
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
  inss = (salarioBruto * 11) / 100;
  salarioBase = salarioBruto - inss;
  if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = (salarioBase * 7.5) / 100;
    descontoIr = ir - 142.8;
    salarioLiquido = salarioBase - descontoIr;
    console.log(`Olá, o seu salário bruto é R$ ${salarioBruto.toFixed(2)}, nele foi descontado R$ ${inss.toFixed(2)} de INSS, tornando seu salário base de R$ ${salarioBase.toFixed(2)} e nele foi descontado R$ ${descontoIr.toFixed(2)} de Imposto de Renda e com isso o seu salário líquido é R$ ${salarioLiquido.toFixed(2)}`);
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * 15) / 100;
    descontoIr = ir - 354.8;
    salarioLiquido = salarioBase - descontoIr;
    console.log(`Olá, o seu salário bruto é R$ ${salarioBruto.toFixed(2)}, nele foi descontado R$ ${inss.toFixed(2)} de INSS, tornando seu salário base de R$ ${salarioBase.toFixed(2)} e nele foi descontado R$ ${descontoIr.toFixed(2)} de Imposto de Renda e com isso o seu salário líquido é R$ ${salarioLiquido.toFixed(2)}`);
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = (salarioBase * 22.5) / 100;
    descontoIr = ir - 636.13;
    salarioLiquido = salarioBase - descontoIr;
    console.log(`Olá, o seu salário bruto é R$ ${salarioBruto.toFixed(2)}, nele foi descontado R$ ${inss.toFixed(2)} de INSS, tornando seu salário base de R$ ${salarioBase.toFixed(2)} e nele foi descontado R$ ${descontoIr.toFixed(2)} de Imposto de Renda e com isso o seu salário líquido é R$ ${salarioLiquido.toFixed(2)}`);
  }
} else if (salarioBruto >= 5189.82) {
  inss = 570.88
  salarioBase = salarioBruto - inss;
  if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = (salarioBase * 22.5) / 100;
    descontoIr = ir - 636.13;
    salarioLiquido = salarioBase - descontoIr;
    console.log(`Olá, o seu salário bruto é R$ ${salarioBruto.toFixed(2)}, nele foi descontado R$ ${inss.toFixed(2)} de INSS, tornando seu salário base de R$ ${salarioBase.toFixed(2)} e nele foi descontado R$ ${descontoIr.toFixed(2)} de Imposto de Renda e com isso o seu salário líquido é R$ ${salarioLiquido.toFixed(2)}`);
  } else if (salarioBase >= 4664.68) {
    ir = (salarioBase * 27.5) / 100;
    descontoIr = ir - 869.36;
    salarioLiquido = salarioBase - descontoIr;
    console.log(`Olá, o seu salário bruto é R$ ${salarioBruto.toFixed(2)}, nele foi descontado R$ ${inss.toFixed(2)} de INSS, tornando seu salário base de R$ ${salarioBase.toFixed(2)} e nele foi descontado R$ ${descontoIr.toFixed(2)} de Imposto de Renda e com isso o seu salário líquido é R$ ${salarioLiquido.toFixed(2)}`);
  }
}




/*
logica errada, depois que li o exemplo de como faz, percebi que alterei a forma de calcular o imposto de renda sobre o salario bruto e nao sobre o salario base 
if(salarioBruto >= 1903.99 && salarioBruto <= 2826.65 ){
    ir = (salarioBruto * 7.5) / 100;
    descontoIr = ir + 142.80;
    inss = (salarioBruto * 9) / 100;
    desconto = inss + descontoIr;
    salarioLiquido = salarioBruto - desconto;
    console.log(`Olá, o seu salário bruto é R$ ${salarioBruto}, nele foi descontado R$ ${descontoIr} de imposto de renda, R$ ${inss} de INSS e com isso o seu salário líquido foi de R$ ${salarioLiquido}`);
  }else{
    inss = (salarioBruto * 9) / 100;
    salarioLiquido = salarioBruto - inss;
    console.log(`Olá, o seu salário bruto é de R$ ${salarioBruto}, nele foi descontado R$ ${inss} de INSS e com isso seu salário líquido foi de R$ ${salarioLiquido} `);
  }
*/