import {clientApi} from './exercicio.ts';
// const { Car, Brand, Model, Category } = require( './exercicio.ts');


const api = new clientApi('https://apigenerator.dronahq.com/api/ycqPAlqB/carro')

test('getCars should return an array of cars', async () => {
    const cars = await api.getCars();
    expect(Array.isArray(cars)).toBe(true)
});

test('getCarById should return a car object', async () => {
    const car = await api.getCarById(1);
    expect(car).toBeDefined();
})

test('DeleteCar should not trhow  an error', async () => {
    await expect(async () => await api.deleteCar(1)).not.toThrow()
})