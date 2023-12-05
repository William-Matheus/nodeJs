function calculoCombustivel( distanciaMt,tipoCombustivel){
    let valor;
    if(tipoCombustivel === 1){
        valor = Number(distanciaMt / 16)
    }else if (tipoCombustivel === 2){
        valor = Number(distanciaMt / 11)
    }else{
        valor = Number(distanciaMt / tipoCombustivel)
    }

    return valor
}
console.log(`A quantidade de combutível que seu carro precisará é: ${calculoCombustivel(100, 1)}`);

module.exports = {calculoCombustivel}
