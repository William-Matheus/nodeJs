function concercionaria(carros){
    switch(carros){
        case "1":
            return "saveiro"
        case "2":
            return "strada"
        case "3":
            return "montana"
        case "4": 
            return "onix"
        case "5": 
            return "civic"
        case "6":
            return "corolla"
        case "7":
            return "siena"
        default:
            return null
    }
}

module.exports = {concercionaria} 