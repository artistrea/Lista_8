// Declare a variavel Arthur para que ele possa roubar de sua empresa enquanto acusa seus colegas
// de corrupção e reclama da ocupação pela GP

let eduardoVencido= false, gabrielVencido = false, felipeVencido = false

const vencerEduardo = ({paoDeQueijo}) => {
    if (paoDeQueijo) {console.log("Eduardo vencido") ; eduardoVencido = true}
    else console.log("Derrota!")
}
const vencerGabriel = ({pet})=> {
    if (pet & eduardoVencido) {console.log("Gabriel vencido");gabrielVencido = true}
    else console.log("Derrota!")
}
const vencerFelipe = ({carteiraDeTrabalho}) => {
    if (carteiraDeTrabalho & gabrielVencido) 
    {Arthur.documentos = "documentos" ; 
    console.log("Felipe vencido\nVitória!")}
    else console.log("Derrota!");
}

const confrontarGP = (ditador) => {
    vencerEduardo(ditador);
    if (eduardoVencido) {vencerGabriel(ditador);
    if (gabrielVencido) vencerFelipe(ditador)}
}
const entrarNaSurdina = ({relogio}) => {if (relogio === 18) 
    {console.log("Vitória!") ; 
    Arthur.documentos = "documentos"}
    else console.log('A GP te escuta e começa a te procurar. Você não tem escolha senão sair vazado.')
}

// Escolher entre:
// entrarNaSurdina(Arthur)
//
// confrontarGP(Arthur)
