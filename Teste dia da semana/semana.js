function diaSemana(dias){
    switch (dias) {
        case "1":
            return "domingo"
        case "2":
            return "segunda"
        case "3":
            return "terça"
        case "4":
            return "quarta"
        case "5":
            return "quinta"
        case "6":
            return "sexta"
        case "7":
            return "sabado"
        default:
            return null
    }
}

module.exports = {diaSemana}