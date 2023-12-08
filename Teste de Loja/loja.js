function lojas(produtos){
    switch(produtos){
        case "Iphone 11":
            return 2100
        case "Poco X4 pro":
            return 2000
        case "A71":
            return 1997
        case "Iphone XR": 
            return 1800
        default:
            return null
    }
}

module.exports = {lojas}