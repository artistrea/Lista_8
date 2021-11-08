let Fahr = 0, Cels = 0, Kelv = 0
var unidade_origem = prompt("Escreva qual a unidade da qual deve-se converter","Unidade").toLowerCase()

switch(unidade_origem){
    case 'fahrenheit':
        Fahr = parseFloat(prompt(`Valor da temperatura em ${unidade_origem}`,"0"))
        Cels = (Fahr - 32) / 1.8
        Kelv = Cels + 273
        
        alert(`Em Celsius: ${Cels} °C \nEm Fahrenheit: ${Fahr} F \nEm Kelvin ${Kelv} K`)
        break

    case 'celsius':
        Cels = parseFloat(prompt(`Valor da temperatura em ${unidade_origem}`,"0"))
        Fahr = Cels * 1.8 + 32
        Kelv = Cels + 273

        alert(`Em Celsius: ${Cels} °C \nEm Fahrenheit: ${Fahr} F \nEm Kelvin ${Kelv} K`)
        break

    case 'kelvin':
        Kelv = parseFloat(prompt(`Valor da temperatura em ${unidade_origem}`,"0"))
        Cels = Kelv - 273
        Fahr = Cels * 1.8 + 32
        
        alert(`Em Celsius: ${Cels} °C \nEm Fahrenheit: ${Fahr} F \nEm Kelvin ${Kelv} K`)
        break
        
    default:
        alert("Unidade inválida. Deve-se escolher entre Fahrenheit, Celsius e Kelvin.")
}