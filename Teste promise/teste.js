const promessa1 = new Promise((resolve, reject) => {
    let multiplicacao = 3 * 3
    if (multiplicacao === 9){
        resolve('Certa resposta')
    } else {
        reject('Errouuu')
    }
})

console.log('Na espera da promise')

promessa1.then((resposta) => {
    console.log(`O resultado do then é: ${resposta}`)
}).catch((erro) => {
    console.error(`O valor do catch é: ${erro}`)

}).finally(() => {
    console.log('Não importa o resultado, eu vou estar sempre aqui (finally)')
})

console.log('Isso vai ser logado antes da promise')