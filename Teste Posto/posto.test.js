const posto = require("./gastoCombustivel.js")

test('O calculo de combustivel necessario para combustível tipo 1', () => { expect(posto.calculoCombustivel(100, 1)).toBe(6.25)}); 
  
test("O calculo de combustivel necessario para combustível tipo 2", () => { expect(posto.calculoCombustivel(100, 2)).toBeCloseTo(9.090909090909092)});