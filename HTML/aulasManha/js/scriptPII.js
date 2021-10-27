//console.log("Início JavaScript Parte II")

var nome = "André Rabelo"
var numero = 23
var vetor = [2, 3, "andre", "outro"]
var boleana = true
var dataAtual = new Date()

// console.log(nome.toUpperCase())
// console.log(nome.substring(0,2))
// console.log(nome.indexOf("Ra"))
// console.log(numero.toFixed(2))
// console.log(vetor.sort())
// console.log(vetor.unshift("valor no inicio"))
// console.log(vetor)

//EXEMPLOS DE UTILIZAÇÃO DE VARIÁVEL DINÂMICA OU STRING TEMPLATE
console.log(`${dataAtual.getDate()}/${dataAtual.getMonth()}/${dataAtual.getFullYear()}`)
console.log(dataAtual.getDate() + "/" + dataAtual.getMonth() + "/" + dataAtual.getFullYear())


console.log("A variavel é: " + numero)
console.log(`A variavel é: ${numero} ${boleana}` )

//CLASSE QUE CONTÉM FUNÇÕES MATEMÁTICAS
console.log(Math.PI)
console.log(Math.pow(numero, 3))

// CAPTURANDO EXCESSOES
// try {
//     aert('')
// }
// catch(erro){
//     alert(erro)
// }


//JSON -> JAVA SCRIPT NATIVE OBJECT
var objeto = {
    "fabricante" : "Ferrari",
    "modelo" : "Ferrari 34534",
    "ano" : 1999,
    "cor" : "vermelho",
    "imprimeObjeto" : function(){
        //ESCOPO DO MÉTODO
        console.log("Nome: " + this.fabricante)
    }
}

// console.log(objeto.cor)
// console.log(objeto['cor'])
// objeto.imprimeObjeto()

function alerta(elemento){
    console.log(elemento.innerHTML)
    elemento.innerHTML = "Posso trocar isso!"
    console.log(elemento.style.color)
    elemento.style.color = 'blue'
}

function alteraImagem(){
    console.log(document.getElementById("imagemDois"))
    var imagem = document.getElementById("imagemDois")
    imagem.style.width = '130px'
    imagem.style.display = 'none'
}

function escreve(){
    console.log("callback")
}


//EXEMPLO DE CALLBACK
//PASSAGEM DE FUNÇÃO VIA PARÂMETRO

function exemploCallback(x, y, func){
    console.log("entrou")
    var a = x + y
    if(a > 10){
        setInterval(() => {
          func()  
        }, 1000);
        
    }
}

// EXEMPLO ARROW FUNCTION
var funcao = () => {console.log("imprime")}
funcao()

//CHAMADA DE CALLBACK COM SINTAXE DE ARROW FUNCTION
exemploCallback(12, 4, 
    () => {
        console.log("callback")
    }
)

//LINGUAGEM ASSINCRONA



var vetorMap = [34, 5, 21, 9, 12]


function mapear(valor, indice, vetor){
    return valor * 2
}

console.log(vetorMap.map(mapear))

console.log(vetorMap.map(
        (valor, i, v) => {
            console.log(v[i+1])
            console.log(i)
            return valor*2
        })
    )

