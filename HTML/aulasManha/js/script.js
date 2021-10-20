 //MANEIRAS DE GERAR SAÍDA EM JAVASCRIPT
 console.log('Alô mundo')
 console.log("novo alo mundo")
 //alert("Alô Mundo Alerta!")
 document.write("<h1 onclick='imprime(`doidao`)' style='color:blue'>Alô mundo</h1>")

 var x ;

 //OPERADORES ARITMÉTICOS

 x = 7.9 + 8;
 console.log("Soma:",x)
 x = 7.9 - 8;
 console.log("Subtração", x)
 x = 7.9 / 8;
 console.log("Divisão:", x)
 x = 7.9 * 8;
 console.log("Multiplicação:", x)
 x = 7.9 % 8;
 console.log("Resto da Divisão",x)
 console.log(typeof(x))


//OPERADORE DE ATRIBUIÇÃO
 var y = 2;
 x -= y;
 y *= 3;
 y /= 3;
 y += 3;
 y %= 3;
 x++
 y-- 
 x = "André" + " Rabelo" // CONCATENA
 x = 4

 console.log("X", x)
 console.log("Y", y)

 var nome = "Sanielle 'Gonçalves'"

 var sobrenome = 'Azara'

 var textoDinamico = `André Rabelo " andre ' teixeira ""' ${nome} ${sobrenome}`

 var textoNaoTaoDinamico = "André Rabelo \" andre ' teixeira \"\"' " + nome + " " + sobrenome


 console.log(textoDinamico)
 console.log(textoNaoTaoDinamico)

 //OPERADORES DE COMPARAÇÃO
 console.log(x == y)
 console.log(x >= y)
 console.log(x <= y)
 console.log(x != y)
 console.log(x === y)
 console.log(x !== y)

 console.log(!(x === y) && (x >= y))
 console.log((x === y) || (x >= y))

 console.log(!(x === y) & (x >= y))
 console.log((x === y) | (x >= y))

 x === y ? console.log("sao identicos") : console.log("sao diferentes");

 //ITERAÇÕES - REPETIÇÕES - LOOPS
 for(i=1;i<=10;i++) {
     console.log("i", i)
 }

 while(x < 10){
     console.log("x", x);
     x++

 }

 //ESTRUTURAS CONDICIONAIS
 if(x > 10) {
     console.log("x > 10")
 } else {
    console.log("x <= 10")
 }
 
 x = 80
 switch (x) {
     case 8:
        console.log("x === 8")
         break;
     case 9:
        console.log("x === 9")
         break;
     case 10:
        console.log("x === 10")
         break;
 
     default:
        console.log("nenhum caso")
         break;
 }

 //FUNÇÕES EM JAVA SCRIPT
 function soma(x, y){
     //.....
     console.log("entrou na soma")
    return x + y;
 }

 function imprime(dado){
     //....
     console.log("acesso ao banco de dados");
     console.log("Dado informado é: " + dado);
 }

 //CHAMADA DE FUNÇÃO
 console.log("Valor da soma:", soma(2,3))

 imprime("André Rabelo")

 console.log(typeof(x))
 console.log(x)