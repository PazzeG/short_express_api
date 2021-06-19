const express = require('express') 
const perso = require('./api.js') 

const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


function mid(req, res, next){
    console.log(req.query);
    console.log(req.params);
    next();
}

app.get("/perso/:id", mid, (req, res) =>{
    res.json(perso.find((perso) => {
        return +req.params.id === perso.id
    }))
})

app.post("/add", (req, res) =>{
    console.log(req.body.id);
    res.sendStatus(200)
})

app.listen(port, () => console.log('Listening on port' + port))