async function TesteAss(){
    console.log("Inicializando");
    try {
        let example = fetch("http://httpbin.org/get");
        console.log(example)
        console.log("Requisição finalizada")
    } catch (error) {
        console.log("Caiu no cath")
        console.log(error)
    }
}

function Teste(){
    console.log("Inicializando");

    let example = fetch("http://httpbin.org/get").then((res) => {
        console.log("Dentro do then");
        console.log(res)
    }).catch((err) => {
        console.log("Já dentro do then");
        console.log(err)
    })

    console.log(example)

    console.log("Após a chamada")
}