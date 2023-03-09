let express = require('express')
let app = express()

app.get('/', function(req, res){
    res.send('Hello World em express')
})

app.get('/teste', function(req, res){
    res.send('Rota funcionando')
})


app.listen(3000,function(){
    console.log('Tudo ok!')
})