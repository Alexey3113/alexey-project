import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import {registerValidation} from "./validations/auth.js"
import checkAuth from "./utils/checkAuth.js";
import {register, login, getMe} from "./controllers/UserController.js"

mongoose.connect("mongodb+srv://admin:qweasd123@cluster0.atnjc.mongodb.net/chillApp?retryWrites=true&w=majority")
.then(() => {
    console.log("DB CONNECTED")
})
.catch(() => {
    console.log("Error. DB not connecnted")
})

const app = express()

app.use(express.json())
app.use(cors())

app.post("/auth/login", login)

app.post("/auth/sign-up", registerValidation, register)

app.get("/auth/me", checkAuth, getMe)


app.listen(4444, (err) => {
    if(err) console.log("Ошибка запуска!");
    else console.log("Server work!");
})