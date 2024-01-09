const promessaSinal = new Promise((resolve, reject) => {
    let sinal 
    if (sinal == true){
        resolve('Seu celular tem sinal de internet')
    }else{
        reject('Seu celular não tem sinal de internet')
    }
})

console.log('Esperando a promise')

promessaSinal.then((resposta) => {
    console.log(`A resposta do sinal pelo then é: ${resposta}`)
}).catch((erro) => {
    console.error(`A resposta do sinal pelo catch é: ${erro}`)
}).finally('Sempre vai estar aqui')