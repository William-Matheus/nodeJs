const promessaUber = new Promise((resolve, reject) =>{
    let uber = true
    if (uber === true){
        resolve('Viagem aceita, O uber está chegando')
    }else{
        reject('Viagem recusada, tente novamente mais tarde')
    }
})

console.log('Esperando o promise')

promessaUber.then((resultado) => {
    console.log(`A resposta do uber pelo then é: ${resultado}`)
}).catch((erro) => {
    console.error(`A resposta do uber pelo catch é: ${erro}`)
}).finally('O finally sempre vai estar aqui')