const carro = require("./carro.js")

test('A marca da saveiro é volkswagem', () => {(expect(carro.concercionaria("1"))).toBe("saveiro")})

test('A marca da strada é fiat', () => {(expect(carro.concercionaria("2"))).toBe("strada")})

test('A marca da montana é chevrolett', () => {(expect(carro.concercionaria("3"))).toBe("montana")})

test('A marca do onix é chevrollet', () => {(expect(carro.concercionaria("4"))).toBe("onix")})

test('A marca do civic é honda', () => {(expect(carro.concercionaria("5"))).toBe("civic")})

test('A marca do corolla é toyota', () => {(expect(carro.concercionaria("6"))).toBe("corolla")})

test('A marca do siena é fiat', () => {(expect(carro.concercionaria("7"))).toBe("siena")})

