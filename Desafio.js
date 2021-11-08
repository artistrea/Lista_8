const acharQuadradosPerfeitos = (num) =>{
    const sqrt = Math.sqrt(num)
    if ( sqrt === parseInt(sqrt) ) return {anterior: (sqrt-1)**2 , atual: num , posterior: (sqrt+1)**2 }
    else return -1
  }
  console.log(acharQuadradosPerfeitos(16))