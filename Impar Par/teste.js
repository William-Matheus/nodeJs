//Impar ou par
function imparPar(impar, par){
    if (impar % 2 !== 0){
        console.log("O número cinco é impar");
        let result = 5 / 2
        return result
    }
    
    else if (par % 2 === 0){
        console.log("O número dez é par");
        let result = 10 / 2
        return result
    }else{
        console.log("Resultado inválido ou não encontrado");
    }
}

console.log(`Deu par ${imparPar(10, 0)}`);

module.exports = {imparPar}