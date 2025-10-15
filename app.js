const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = require('./app/models')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Database connected!')
    }).catch((err) => {
        console.log("Cannot connect to the database!", err)
        process.exit()
    })

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to store-server'
    })
})

app.listen(PORT,() => { console.log(`Running: http://localhost:${PORT}`)})