import quadrado from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js"

console.log('Area ' + quadrado.areaQuadrado(5))
console.log('Perimetro ' + quadrado.perimetroQuadrado(5))
console.log('numeroAleatorio ' + numeroAleatorio())


console.log('Fetch -> ')

fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });


async function fetchProdutos(url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    return json;
}

const porduto = fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');

console.log(porduto)


console.log('Arrays -> ')

const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'Contas Pagar',
    'R$ 300',
    'R$ 400',
    'Meus dados',
  ];
  
  // Retorna uma array nova, que contem os items em
  // que o retorno da função for verdadeiro
  const precosFiltro = precos.filter((preco) => preco.includes('R$'));

  console.log(precosFiltro)
  
  // Retorna uma nova array, modificada com o
  // retorno de cada item da função
  const precoNumeros = precosFiltro.map((preco) =>
    Number(preco.replace('R$ ', '')),
  );
  
  console.log(precoNumeros)