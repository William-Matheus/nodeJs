//POSTO DE GASOLINA
const promessaGasolina = new Promise((resolve, reject) => {
    let gasolina = 5.55
    let diesel = 4.54
    let alcool = 5.50

    let bomba
    switch(bomba){
        case gasolina:
            return 'Seu carro será abastecido com gasolina';
        case diesel:
            return 'Seu carro será abastecido com diesel';
        case alcool:
            return 'Seu carro será abastecido com alcool';
        default:
            console.error('Nenhum combustível encontrado');
    }
})

console.log('Esperando a promise');

promessaGasolina.then(() => {
    console.log(`A resposta do combutível pelo then é: ${gasolina}`);
}).catch((error) => {
    console.error(`A resposta do combutível pelo catch é: ${diesel}`);
}).finally('O finally sempre estará aqui');