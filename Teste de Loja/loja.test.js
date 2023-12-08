const celulares = require("./loja.js")

test('O Iphone 11 custa R$2100', () => {(expect(celulares.lojas("Iphone 11"))).toBe(2100)})

test('O Poco X4 custa R$2000', () => {(expect(celulares.lojas("Poco X4 pro"))).toBe(2000)})

test('O Galaxy A71 custa R$1997', () => {(expect(celulares.lojas("A71"))).toBe(1997)})

test('O Iphone XR custa R$1800', () => {(expect(celulares.lojas("Iphone XR"))).toBe(1800)})