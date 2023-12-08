const semana = require("./semana.js")

test('"Sexta" é o sexto dia da semana', () => {(expect(semana.diaSemana("6"))).toBe("sexta")})

test('"Sabado" é o sétimo dia da semana da semana', () => {(expect(semana.diaSemana("7"))).toBe("sabado")})