import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {validationResult} from "express-validator"
import UserModel from "../models/User.js"
import User from "../models/User.js";


export const register = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json(errors.array())
        }

        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            email: req.body.email,
            nickName: req.body.nickName,
            age: req.body.age,
            passwordHash: hash

        })

        const user = await doc.save()

        const token = jwt.sign({
            _id: user._id
        }, "secretkey123123", {expiresIn: "30d"})

        const {passwordHash, ...userData} = user._doc

        res.json({
            ...userData,
            token

        })

    } catch (e) {
        res.status(500).json({
            message: `Не удалось зарегистрироваться`,
            err: e
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})

        if(!user) {
            return res.status(404).json({
                message: "Такого пользователя не существует"
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

        if(!isValidPass){
            return res.status(400).json({
                message: "Неверный логин или пароль"
            })
        }

        const token = jwt.sign({
            _id: user._id
        }, "secretkey123123", {expiresIn: "30d"})

        const {passwordHash, ...userData} = user._doc

        res.json({
            ...userData,
            token
        })


    } catch (e) {
        res.status(500).json({
            message: "Не удалось авторизоваться"
        })
    }    
}


export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if(!user) {
            return res.status(404).json({
                message: "Нет такого пользоваеля"
            })
        }

        const {passwordHash, ...userData} = user._doc

        res.json(userData)

    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить данные!"
        })        
    }
}