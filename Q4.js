alunos = [
    {
        nome: "Aluno1",
        idade: 18,
        mediaFinal: 7,
    },
    {
        nome: "Aluno2",
        idade: 17,
        mediaFinal: 10,
    },
    {
        nome: "Aluno3",
        idade: 16,
        mediaFinal: 3,
    },
    {
        nome: "Aluno4",
        idade: 19,
        mediaFinal: 8,
    },
    {
        nome: "Aluno5",
        idade: 21,
        mediaFinal: 5,
    },
    {
        nome: "Aluno6",
        idade: 35,
        mediaFinal: 11,
    }    
]

const classStatistics = (turma) =>{
    var notas = [], 
        soma_notas = 0;
    turma.forEach( aluno => { var nota = aluno.mediaFinal ; notas.push(nota) ; soma_notas += nota } )
    var mediaTurma = (soma_notas / notas.length),
        variancia = 0;
    notas.forEach( nota => { variancia += ((nota-mediaTurma) * (nota-mediaTurma)) }); variancia = variancia / notas.length
    var desvioPadrao = Math.round(Math.sqrt(variancia) * 100) / 100
    console.log(`Nota média da turma = ${mediaTurma}. \t Desvio Padrão das notas na turma = ${desvioPadrao}`)
}

const addMencao = (turma) => {return turma.map(function(aluno){
    var nota = aluno.mediaFinal , mencao = 0;
    if (0<=nota && nota<5) mencao = 'RR';
    else if (0<=nota && nota < 7) mencao = 'MM';
    else if (0<=nota && nota < 9) mencao = 'MS';
    else if (0<=nota && nota <= 10) mencao = 'SS';
    else mencao = 'Impossivel'
    return { ...aluno , "Mencao": mencao }
})}

classStatistics(alunos)
let novoar = addMencao(alunos)
console.log(novoar)