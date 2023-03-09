let {readFile, writeFile} = require('fs')

readFile("arquivo.txt", "utf8", (error, texto)=>{
    if(error){
        throw error
    } else{
        console.log(texto)
    }
})

writeFile("arquivo.txt", "adicionando textos com writeFile", (error)=>{
    if(error){
        throw error

    } else{
        console.log("Adicionado com sucesso")
    }
})