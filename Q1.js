
const calculateIMC = (peso,altura) => peso/(altura**2)

// b)
const generateUser = (nome,idade,email) => {return {nome: nome, idade: idade, email: email}}

// c)
const onlyEven = (arr) => {
  var newarr = [];
  arr.forEach(function(num){ if (num%2 === 0) newarr.push(num) }); 
  return newarr
}