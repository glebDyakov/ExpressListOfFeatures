//import express from 'express'
// import path from 'path'

const express = require('express')
const path = require('path')
const dirname = path.resolve()
//const serverRoutes = require('./routes/servers.js')  
//import {requestTime, logger} from './middlewares.js'
//const PORT = process.env.PORT ?? 3000

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(dirname, 'ejs'))

//app.use(express.static(path.resolve(dirname, 'static', 'demo')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//app.use(serverRoutes)

//app.use(requestTime)
//app.use(logger)


app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>')
    // res.sendFile(path.resolve(dirname, 'static', 'index.html'))
    res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (req, res) => {
    // res.send('<h1>Hello Express</h1>')
    // res.sendFile(path.resolve(dirname, 'static', 'features.html'))
    res.render('features', {title: 'Features Page', active: 'features'})

})

app.get('/download', (req, res) => {
    // res.send('<h1>Hello Express</h1>')
    res.download(path.resolve(dirname, 'static', 'index.html'))
})

app.listen(3000,() => {
    console.log(`Server has been started on port ${3000}`)
})
