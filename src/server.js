require('dotenv').config()
const fs = require('fs/promises')
const path = require('path')
const express = require('express');
const app = express();

app.listen(process.env.PORT, () => console.log("server ready"));

async function server () {
    app.use(cors({
        origin: process.env.FRONT_URL
    }))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(helmet())
    const routesPath = path.join(__dirname, "routes")
    fs.readdir(routesPath, (err, files) => {
        files.forEach(file => {
            const routePath = path.join(__dirname, "routes", file)
            const route = require(routePath)
            if(route.path && route.router) app.use(route.path, route.router)
        })
    })
}