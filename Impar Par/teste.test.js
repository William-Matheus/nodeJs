const testes = require("./teste.js")

test('O número cinco é impar não pode ser divido por dois', () => {expect(testes.imparPar(5, 0)).toBe(2.5)})

test('O número dez é par pode ser divido por dois', () => {expect(testes.imparPar(10, 0)).toBe(5)})