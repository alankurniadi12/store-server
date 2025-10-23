const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/img', express.static(path.join(__dirname, './public/img')))

const db = require('./app/models')
db.mongoose
    .connect(db.url)
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

require('./app/routes/product.route')(app)
require('./app/routes/order.route')(app)

app.listen(PORT,() => { console.log(`Running: http://localhost:${PORT}`)})