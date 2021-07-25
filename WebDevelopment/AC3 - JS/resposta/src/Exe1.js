/**

 * Função que recebe uma lista e retorna o maior elemento.

 Desenvolva usando o for
   @param {Array} lista 
 * @return {Number} o menor valor.
 */

function acharMaior(lista) {
  let valor = 0;
  for (let index = 0; index < lista.length; index++) {
    if (valor < lista[index]) {
      valor = lista[index];
    }
  }
  return valor;
}

function acharMenor(lista) {
  let valor2 = 99999;
  for (let index = 0; index < lista.length; index++) {
    if (valor2 > lista[index]) {
      valor2 = lista[index];
    }
  } return valor2; }


/**
 * Função que formata uma lista de compras.
 * 
 * Considere, por exemplo a lista ["fandangos","morangos","laranjas","ovos"]
 * A sua versão formatada fica: "fandangos, morangos, laranjas e ovos"
 * 
 * Ou seja, separamos por virgulas, mas o ultimo tem um "e" antes
 * 
 * Mais exemplos
 * a lista ["morangos","laranjas"] fica "morangos e laranjas"
 * a lista de um único elemento ["laranjas"] fica "laranjas"
 * 


 * @param {Array} lista 
 * @return {String} a lista formatada
 */

function lista_de_compras(lista) {
  let texto = "";
  let syze = lista.length;
  for (let i = 0; i < syze; i++){
    texto = texto + lista[i]
    if (i < syze-2 ){
      texto = texto + ", ";
    } else if (i == syze-2){
      texto = texto + " e ";
    }
  }
  return texto }


/**

 * Função que recebe uma lista e retorna o a maior distância entre dois elementos.

 Por exemplo, na lista [10,13,8,17,9], a maior distância é entre 17 e 8, resulta 9

 Desenvolva usando o for
   @param {Array} lista
 * @return {Number} a maior distância.
 */

function acharMaiorDistancia(lista) {
  let distancia;
  if(0 !==lista.length ){
    let maior = acharMaior(lista)
    let menor = acharMenor(lista)
    distancia = maior - menor
  } else{ 
    return undefined
    }
  
  
  
  return distancia
}

/**

 * Função que recebe uma lista e retorna a lista, com os elementos na ordem inversa.

 Por exemplo, na lista [10,13,8,17,9], o inverso resulta [9, 17, 8, 13, 10]

 Desenvolva usando o for
   @param {Array} lista 
 * @return {Array} a lista invertida
 */

function inverter(lista) {
  let lista_invert = [];
  for(let x = 0; x < lista.length; x++){
    lista_invert.unshift(lista[x]); 
  }
  return lista_invert;
}

// A próxima função tem a ver com baralho.

// A idéia é representar cada carta como uma string de 2 letras:
//     as cartas sao 'A' (ás) 2,3,4,5,...,10,'J','Q' e 'K'
//     os naipes sao 'o' (ouros), 'c' (copas), 'e' (espadas) e 'p' (paus)

// O J de ouros, por exemplo, é representado pela string 'Jo'. O ás de copas,
// pela string 'Ac'

// #faça uma função que cria um baralho completo, com todas as 52 cartas
// #ela nao recebe nada e retorna uma lista.
// #os naipes sao 'o' (ouros), 'c' (copas), 'e' (espadas) e 'p' (paus)
// #as cartas sao 'A' (ás) 2,3,4,5,...,10,'J','Q' e 'K'
// #O J de ouros, por exemplo, é representado pela string 'Jo'. 
// #Assim 'Jo' é um dos elementos que deve aparecer na lista

// Dica: para juntar duas strings, faça let nova='a'+'b'
// Dica: para transformar uma variável n de número em string, faça let nova = n.toString()

/**
 * Função que cria baralho

 Desenvolva usando o for
 * @return {Array} a lista com os as cartas
 */

function cria_baralho() {
  let cartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let naipes = ["o","c","e","p"]
  let baralho = [] 
  for(let x = 0; x<4; x++){
    for (let y = 0; y < cartas.length; y++){
      baralho.push(cartas[y] + naipes[x]);
      }
    }
  return baralho;
  }

/**
 * Função que desamassa uma lista.
 * 
 * Considere a lista l=[1,[2,3],4] (uma lista com 3 elementos, sendo que l[1] é uma lista)
 * Por exemplo, ao receber a lista l, a função deve retornar [1,2,3,4]

 * @param {Array} lista 
 * @return {Array} a lista "desamassada"
 */

function desamassa_lista(lista) {

}

